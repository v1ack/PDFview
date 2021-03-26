/* global tau, tizen, webapis */
/* global pdfjsLib */
/* global document, console, window, clearTimeout, setTimeout, localStorage, setInterval, clearInterval, alert */
"use strict";
var $ = (id) => document.getElementById(id);
var mlv = null,
    flv = null;

/**
 * Returns function to open file by type
 * @param {String} file name or path
 */
function openFunction(file) {
    switch (file.split('.').pop().toLowerCase()) {
        case 'pdf':
            return 'pdfView.openDocFile';
        default:
            return '';
    }
}
/**
 * Scanning default dir 'documents' and building tau list
 */
function scanFiles() {
    let defaultDir = 'documents',
        types = ['pdf'],
        onError = (error) => {
            console.log('Error', error);
        },
        humanFileSize = (bytes, si) => {
            let thresh = si ? 1000 : 1024;
            if (Math.abs(bytes) < thresh) {
                return bytes + ' B';
            }
            let units = si ? ['kB', 'MB', 'GB'] : ['KiB', 'MiB', 'GiB'],
                u = -1;
            do {
                bytes /= thresh;
                ++u;
            } while (Math.abs(bytes) >= thresh && u < units.length - 1);
            return bytes.toFixed(1) + ' ' + units[u];
        };
    tizen.filesystem.resolve(defaultDir,
        function(dir) {
            dir.listFiles((list) => {
                let filesList = [];
                for (let f of list) {
                    if (types.indexOf(f.name.split('.').pop().toLowerCase()) > -1) {
                        filesList.push({
                            name: f.name,
                            path: f.fullPath,
                            modified: f.modified,
                            size: f.fileSize
                        });
                    }
                }
                let l = $('files-list'),
                    html = '';
                for (let file of filesList) {
                    let onClick = openFunction(file.name);
                    html += '<li class="li-has-multiline"><a onclick="' + onClick + '(\'' + file.path + '\');">' + file.name + '<span class="ui-li-sub-text li-text-sub">' + humanFileSize(file.size, false) + '</span></a></li>';
                }
                if (!filesList.length) {
                    html = '<li class="li-has-multiline"><a>No files found<span class="ui-li-sub-text li-text-sub">See help section</span></a></li>';
                }
                l.innerHTML = html;
                flv = tau.widget.Listview(l);
            }, onError);
        },
        onError, "r");
}

var pdfView = {
    page: {
        scale: 1.2,
        canvas: $('canvas-pdf'),
        ctx: null
    },
    preview: {
        scale: 0.17,
        canvas: $('canvas-pdf-preview'),
        ctx: null
    },
    k: 2,
    previewPage: $("pdf-preview"),
    pageNumberPicker: $("page-number-picker"),
    pageNumberPickerWidget: null,
    watchPageInterval: null,
    pdfDoc: null,
    pageNumber: 1,
    pageRendering: false,
    pageNumberPending: null,
    m1: 6,
    /**
     * Rendering page
     * @param {int} page number
     * @param {boolean} if true for preview, else for page
     */
    renderPage: function(num, preview) {
        let self = pdfView,
            pageData;
        if (preview) {
            pageData = self.preview;
        } else {
            pageData = self.page;
        }
        self.pageRendering = true;
        self.pdfDoc.getPage(num).then(function(page) {
            let viewport = page.getViewport({
                scale: pageData.scale
            });
            pageData.canvas.height = viewport.height;
            pageData.canvas.width = viewport.width;

            let renderContext = {
                canvasContext: pageData.ctx,
                viewport: viewport
            };
            let renderTask = page.render(renderContext);

            renderTask.promise.then(function() {
                tau.closePopup();
                self.pageRendering = false;
                if (self.pageNumberPending !== null) {
                    self.renderPage(self.pageNumberPending, preview);
                    self.pageNumberPending = null;
                }
            });
        });
        $('page_num').textContent = num;
    },
    queueRenderPage: function(num, preview) {
        let self = pdfView;
        if (self.pageRendering) {
            self.pageNumberPending = num;
        } else {
            self.renderPage(num, preview);
        }
    },
    prevPage: function() {
        let self = pdfView;
        if (self.pageNumber <= 1) {
            return;
        }
        self.pageNumber--;
        self.queueRenderPage(self.pageNumber);
    },
    nextPage: function() {
        let self = pdfView;
        if (self.pageNumber >= self.pdfDoc.numPages) {
            return;
        }
        self.pageNumber++;
        self.queueRenderPage(self.pageNumber);
    },
    bezelRotation: function(e) {
        let self = pdfView;
        if (e.detail.direction === 'CW') {
            self.nextPage();
        } else if (e.detail.direction === 'CCW') {
            self.prevPage();
        }
    },
    /**
     * Opens page and sets event listener on bezel
     */
    openPage: function() {
        let self = pdfView;
        self.pageNumber = parseInt(self.pageNumberPicker.value);
        tau.changePage('pdf');
        self.renderPage(self.pageNumber);
        document.getElementsByTagName('meta').viewport.content = "width=device-width, initial-scale=1.0";
        window.addEventListener("rotarydetent", self.bezelRotation);
    },
    /**
     * Sets preview
     * @param {pdfDoc} pdfjsLib.getDocument() result
     */
    openPdf: function(pdfDoc_) {
        let self = pdfView;
        self.pdfDoc = pdfDoc_;
        self.pageNumberPicker.value = 1;
        self.pageNumberPicker.max = self.pdfDoc.numPages;
        var pickerValue = self.pageNumberPicker.value,
            pageTimeout = -1;

        function watchPage() {
            if (pickerValue !== self.pageNumberPicker.value) {
                if (pageTimeout !== -1) {
                    clearTimeout(pageTimeout);
                }
                pageTimeout = setTimeout(
                    function() {
                        self.queueRenderPage(parseInt(self.pageNumberPicker.value), true);
                    }, 400);
                pickerValue = self.pageNumberPicker.value;
            }
        }
        self.watchPageInterval = setInterval(watchPage, 100);
        tau.changePage('pdf-preview');
        document.querySelectorAll('.ui-number-picker-set')[1].style.display = 'none';
        // self.previewPage.childNodes[5]
        //     .removeChild(self.previewPage.childNodes[5].childNodes[3]);
        // setTimeout(function() {
        //     self.pageNumberPicker.parentElement.childNodes[0].click();
        // }, 300);
        self.renderPage(1, true);
        $('page_count').textContent = self.pdfDoc.numPages;
    },
    /**
     * Reads file from storage, loads it to pdfjsLib, then pdfView.openPdf()
     * @param {String} path to file
     */
    openDocFile: function(path) {
        // let a = new Set();
        // if (localStorage.l !== undefined) {
        //     let f = JSON.parse(localStorage.l);
        //     f.forEach((v, c, ar) => {
        //         a.add(v);
        //     });
        // }
        // if (a.has(path) || a.size < pdfView.m1 / pdfView.k) {
        //     a.add(path);
        //     let b = [];
        //     a.forEach((v, v2, set) => (b.push(v)));
        //     localStorage.l = JSON.stringify(b);
        // } else {
        //     tau.openPopup('demo-popup');
        //     return;
        // }
        // ------------------------------------------------------------------
        localStorage.lastFile = path;
        tau.openPopup('loading-popup');
        setTimeout(function() {
            tizen.filesystem.resolve(path, function(doc) {
                if (doc.fileSize > 10485760)
                    alert('This file is big, it can cause error');
                doc.openStream('r', (fs) => {
                    pdfjsLib.getDocument({
                        data: fs.readBytes(doc.fileSize)
                    }).promise.then(pdfView.openPdf);
                }, pdfView.onError, 'UTF-8');
            }, pdfView.onError, "r");
        }, 200);
    },
    init: function() {
        this.page.scale = localStorage.pageScale || 1.2;
        this.page.ctx = this.page.canvas.getContext('2d');
        this.preview.ctx = this.preview.canvas.getContext('2d');
        this.previewPage.addEventListener("pagebeforeshow", function() {
            pdfView.pageNumberPickerWidget = tau.widget.NumberPicker(pdfView.pageNumberPicker);
        });
        $('prev').addEventListener('click', pdfView.prevPage);
        $('next').addEventListener('click', pdfView.nextPage);
    },
    onError: (e) => {
        console.log('Error', e);
    }
};

function SAServer() {
    /**
     * Shows message based on error code.
     * @error   {String} Error code.
     */
    function onerror(error) {
        window.history.back();
        showNote(error);
    }

    /**
     * Shows element, which contains message.
     * @id  {String} Element id.
     */
    function showNote(id) {
        let note = $("msg-" + id.toLocaleLowerCase());
        note.style.display = 'inline-block';
        tau.openPopup('sa-toast');
        setTimeout(() => {
            note.style.display = 'none';
        }, 3000);
    }

    /**
     * Creates a SAP socket and accepts an incoming connection.
     * @appName         {String} appName Application peerAgent name.
     * @onFileTransfer  {Function} onFileTransfer Method executed after socket successful connection with SAFileTransfer as argument.
     * @onerror         {Function} onerror Method executed after socket connection failure with error code as argument.
     */
    function SAServerOpen(appName, onFileTransfer, onerror) {
        webapis.sa.requestSAAgent(function(agents) {
            if (agents.length > 0) {
                var SAAgent = agents[0];
                SAAgent.setServiceConnectionListener({
                    onrequest: function(peerAgent) {
                        if (peerAgent.appName === appName) {
                            SAAgent.acceptServiceConnectionRequest(peerAgent);
                        } else {
                            SAAgent.rejectServiceConnectionRequest(peerAgent);
                        }
                    },
                    onconnect: function(socket) {
                        socket.setSocketStatusListener(function(reason) {
                            socket.close();
                        });
                        showNote("onconnect");
                    },
                    onerror: onerror
                });
                onFileTransfer(SAAgent.getSAFileTransfer());
            }
        });
    }

    /**
     * Creates a gui and accepts file connections.
     * @SAFileTransfer  {SAFileTransfer} File Transfer object between a Service Provider and Service Consumer.
     */
    function onFileTransfer(SAFileTransfer) {
        let progress = $("sa-file-progress"),
            ratio = $("sa-file-ratio"),
            name = $("sa-file-name"),
            button = $("sa-file-button");

        SAFileTransfer.setFileReceiveListener({
            onreceive: function(id, fileName) {
                progress.value = 0;
                name.innerHTML = fileName;
                ratio.innerHTML = "0%";

                tau.changePage("sa-files");

                button.onclick = function() {
                    try {
                        SAFileTransfer.cancelFile(id);
                        window.history.back();
                    } catch (err) {
                        window.history.back();
                        showNote("peeragent_no_response");
                    }
                };
                try {
                    SAFileTransfer.receiveFile(id, 'documents/' + fileName);
                } catch (e) {
                    window.history.back();
                    showNote("unknown_error");
                }
            },
            onprogress: function(id, value) {
                progress.value = value;
                ratio.innerHTML = value + "%";
            },
            oncomplete: function(id, localPath) {
                window.history.back();
                showNote("oncomplete");
            },
            onerror: onerror
        });
    }
    try {
        SAServerOpen("PDFview", onFileTransfer, onerror);
    } catch (error) {
        console.log("PDFview: " + error.name + "( " + error.message + " )");
    }
}

/**
 * Opens url in phone's browser
 * @param {String} url adress
 */
function openBrowserOnPhone(url) {
    try {
        tizen.application.launchAppControl(
            new tizen.ApplicationControl(
                "http://tizen.org/appcontrol/operation/default",
                null,
                null,
                null, [
                    new tizen.ApplicationControlData("msgId", ["mgr_install_host_app_req"]),
                    new tizen.ApplicationControlData("type", ["phone"]),
                    new tizen.ApplicationControlData("deeplink", [url])
                ]),
            "com.samsung.w-manager-service",
            null,
            null,
            null);
        alert('Check on phone');
    } catch (err) {
        // launcher error
    }
}

// Listeners
(function() {
    // beforehide, beforeshow, hide, show
    window.addEventListener('pageshow', function(ev) {
        let page = ev.target,
            pageId = page.id;
        if (pageId === 'main') {
            let mainListview = $('main-listview');
            if (localStorage.lastFile) {
                if ($('last_file')) {
                    let a = $('last_file');
                    a.parentNode.removeChild(a);
                }
                let filename = localStorage.lastFile.split('/').pop();
                mainListview.innerHTML = '<li class="li-has-multiline" id="last_file"><a onclick="' + openFunction(filename) + '(\'' + localStorage.lastFile + '\');">' + filename + '<span class="ui-li-sub-text li-text-sub">Last file</span></a></li>' + mainListview.innerHTML;
            }
            mlv = tau.widget.Listview(mainListview);
        } else if (pageId === 'files-page') {
            scanFiles();
        }
    });
    window.addEventListener('pagehide', function(ev) {
        let page = ev.target,
            pageId = page.id;
        if (pageId === 'main') {
            mlv.destroy();
        } else if (pageId === 'files-page') {
            flv.destroy();
            flv = null;
        }
    });
    window.addEventListener('tizenhwkey', function(ev) {
        let activePopup = null,
            page = null,
            pageId = '';

        if (ev.keyName === 'back') {
            activePopup = document.querySelector('.ui-popup-active');
            page = document.getElementsByClassName('ui-page-active')[0];
            pageId = page ? page.id : '';

            if (pageId === 'main' && !activePopup) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {}
            } else {
                if (pageId === 'pdf') {
                    document.getElementsByTagName('meta').viewport.content = 'width=device-width, initial-scale=1.0, user-scalable=no';
                    window.removeEventListener('rotarydetent', pdfView.bezelRotation);
                }
                if (pageId === 'pdf-preview') {
                    if (pdfView.pageNumberPickerWidget !== null) {
                        var ph = function() {
                            pdfView.pageNumberPickerWidget.destroy();
                            window.removeEventListener('pagehide', ph);
                            ph = null;
                        };
                        window.addEventListener('pagehide', ph);
                    }
                    if (pdfView.watchPageInterval) {
                        clearInterval(pdfView.watchPageInterval);
                    }
                    if (pdfView.pdfDoc) {
                        pdfView.pdfDoc.destroy();
                        pdfView.pdfDoc = null;
                    }
                }
                window.history.back();
            }
        }
    });
    pdfView.init();
    SAServer();

    if (!localStorage.new_app){
        tau.changePage("update-popup");
        localStorage.new_app = "true";
    }
}());

(function() {
    /**
     * page - More option page element
     * popup - More option popup element for rectangular devices
     * handler - Element for opening more option popup
     * popupCircle - More option popup element for circular devices
     * elSelector - Selector element in the circular popup
     * selector - TAU selector instance
     */
    var page = document.querySelector("#files-page"),
        handler = page.querySelector(".ui-more"),
        // popupCircle = page.querySelector("#moreoptionsPopupCircle"),
        // elSelector = page.querySelector("#selector"),
        // selector,
        clickHandlerBound;

    /**
     * Click event handler for opening more option popup
     */
    function clickHandler() {
        let filename = flv._items[flv._state.currentIndex].innerText.split("\n")[0];
        let delete_ = confirm("Are you shure to delete " + filename + "?");
        if (delete_) {
            tizen.filesystem.resolve('documents', dir => dir.deleteFile('documents/' + filename))
            flv.destroy();
            flv = null;
            scanFiles();
        }
        // tizen.filesystem.deleteFile("documents/" + filename);
        // tau.openPopup(popupCircle);
    }

    /**
     * pagebeforeshow event handler
     * Do preparatory works and adds event listeners
     */
    page.addEventListener("pagebeforeshow", function() {
        // let radius = window.innerHeight / 2 * 0.8;

        clickHandlerBound = clickHandler.bind(null);
        handler.addEventListener("click", clickHandlerBound);
        // selector = tau.widget.Selector(elSelector, { itemRadius: radius });

    });

    /**
     * pagebeforehide event handler
     * Destroys and removes event listeners
     */
    page.addEventListener("pagebeforehide", function() {
        handler.removeEventListener("click", clickHandlerBound);
        // selector.destroy();
    });

    /**
     * When user click the indicator of Selector, drawer will close.
     */
    // elSelector.addEventListener("click", function(event) {
    //     var target = event.target;

    //     // 'ui-selector-indicator' is default indicator class name of Selector component
    //     if (target.classList.contains("ui-selector-indicator")) {
    //         tau.closePopup(popupCircle);
    //     }

    // });
}());

const sliderChange = function(e) {
    localStorage.pageScale = e.target.valueAsNumber * 0.15 + 0.6;
    pdfView.page.scale = localStorage.pageScale;
};
$('slider-pdf-scale').addEventListener("change", sliderChange);

(function() {
    /**
     * page - Slider page element
     * elSlider - Slider element
     * slider - Slider component
     * pageBeforeShowHandler - pagebeforeshow event handler
     * pageHideHandler - pagehide event handler
     */
    var page = document.getElementById("settings-page"),
        elSlider = document.getElementById("slider-pdf-scale"),
        slider,
        pageBeforeShowHandler,
        pageHideHandler;

    pageBeforeShowHandler = function() {
        slider = tau.widget.Slider(elSlider);
    };

    pageHideHandler = function() {
        slider.destroy();
    };

    page.addEventListener("pagebeforeshow", pageBeforeShowHandler);
    page.addEventListener("pagehide", pageHideHandler);
}());

