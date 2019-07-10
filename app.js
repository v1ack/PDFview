/* global tau, tizen, webapis */
/* global pdfjsLib */
/* global document, console, window, clearTimeout, setTimeout, localStorage, setInterval, clearInterval, alert, atob */
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
        function (dir) {
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
    preview_page: $("pdf-preview"),
    page_number_picker: $("page-number-picker"),
    page_number_picker_widget: null,
    watch_page_interval: null,
    pdfDoc: null,
    page_number: 1,
    page_rendering: false,
    page_number_pending: null,
    m1: 6,
    /**
     * Rendering page
     * @param {int} page number
     * @param {boolean} if true for preview, else for page
     */
    renderPage: function (num, preview) {
        let self = pdfView,
            pageData;
        if (preview) {
            pageData = self.preview;
        } else {
            pageData = self.page;
        }
        self.page_rendering = true;
        self.pdfDoc.getPage(num).then(function (page) {
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

            renderTask.promise.then(function () {
                tau.closePopup();
                self.page_rendering = false;
                if (self.page_number_pending !== null) {
                    self.renderPage(self.page_number_pending, preview);
                    self.page_number_pending = null;
                }
            });
        });
        $('page_num').textContent = num;
    },
    queueRenderPage: function (num, preview) {
        let self = pdfView;
        if (self.page_rendering) {
            self.page_number_pending = num;
        } else {
            self.renderPage(num, preview);
        }
    },
    prevPage: function () {
        let self = pdfView;
        if (self.page_number <= 1) {
            return;
        }
        self.page_number--;
        self.queueRenderPage(self.page_number);
    },
    nextPage: function () {
        let self = pdfView;
        if (self.page_number >= self.pdfDoc.numPages) {
            return;
        }
        self.page_number++;
        self.queueRenderPage(self.page_number);
    },
    bezelRotation: function (e) {
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
    openPage: function () {
        let self = pdfView;
        self.page_number = parseInt(self.page_number_picker.value);
        tau.changePage('pdf');
        self.renderPage(self.page_number);
        document.getElementsByTagName('meta').viewport.content = "width=device-width, initial-scale=1.0";
        window.addEventListener("rotarydetent", self.bezelRotation);
    },
    /**
     * Sets preview
     * @param {pdfDoc} pdfjsLib.getDocument() result
     */
    openPdf: function (pdfDoc_) {
        let self = pdfView;
        self.pdfDoc = pdfDoc_;
        self.page_number_picker.value = 1;
        self.page_number_picker.max = self.pdfDoc.numPages;
        var picker_val = self.page_number_picker.value,
            page_timeout = -1;

        function watchPage() {
            if (picker_val !== self.page_number_picker.value) {
                if (page_timeout !== -1) {
                    clearTimeout(page_timeout);
                }
                page_timeout = setTimeout(
                    function () {
                        self.queueRenderPage(parseInt(self.page_number_picker.value), true);
                    }, 400);
                picker_val = self.page_number_picker.value;
            }
        }
        self.watch_page_interval = setInterval(watchPage, 100);
        tau.changePage('pdf-preview');
        self.preview_page.childNodes[5]
            .removeChild(self.preview_page.childNodes[5].childNodes[3]);
        setTimeout(function () {
            self.page_number_picker.parentElement.childNodes[0].click();
        }, 300);
        self.renderPage(1, true);
        $('page_count').textContent = self.pdfDoc.numPages;
    },
    /**
     * Reads file from storage, loads it to pdfjsLib, then pdfView.openPdf()
     * @param {String} path to file
     */
    openDocFile: function (path) {
        //		let a = new Set();
        //		if (localStorage.l != undefined){
        //		    let f = JSON.parse(localStorage.l);
        //		    f.forEach((v, c, ar) => {a.add(v)});
        //		}
        //		if (a.has(name) || a.size < pdfView.m1/pdfView.k){
        //		    a.add(name);
        //		    let b = [];
        //		    a.forEach((v, v2, set) => (b.push(v)));
        //		    localStorage.l = JSON.stringify(b);
        //		} else {
        //		    tau.openPopup('demo-popup');
        //		    return;
        //		}
        localStorage.lastFile = path;
        tau.openPopup('loading-popup');
        setTimeout(function () {
            tizen.filesystem.resolve(path, function (doc) {
                doc.openStream('r', (fs) => {
                    pdfjsLib.getDocument({
                        data: fs.readBytes(doc.fileSize)
                    }).promise.then(pdfView.openPdf);
                }, pdfView.onError, 'UTF-8');
            }, pdfView.onError, "r");
        }, 200);
    },
    init: function () {
        this.page.ctx = this.page.canvas.getContext('2d');
        this.preview.ctx = this.preview.canvas.getContext('2d');
        this.preview_page.addEventListener("pagebeforeshow", function () {
            pdfView.page_number_picker_widget = tau.widget.NumberPicker(pdfView.page_number_picker);
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
        webapis.sa.requestSAAgent(function (agents) {
            if (agents.length > 0) {
                var SAAgent = agents[0];
                SAAgent.setServiceConnectionListener({
                    onrequest: function (peerAgent) {
                        if (peerAgent.appName === appName) {
                            SAAgent.acceptServiceConnectionRequest(peerAgent);
                        } else {
                            SAAgent.rejectServiceConnectionRequest(peerAgent);
                        }
                    },
                    onconnect: function (socket) {
                        socket.setSocketStatusListener(function (reason) {
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
            onreceive: function (id, fileName) {
                progress.value = 0;
                name.innerHTML = fileName;
                ratio.innerHTML = "0%";

                tau.changePage("sa-files");

                button.onclick = function () {
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
            onprogress: function (id, value) {
                progress.value = value;
                ratio.innerHTML = value + "%";
            },
            oncomplete: function (id, localPath) {
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
                null,
                [
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
(function () {
    // beforehide, beforeshow, hide, show
    window.addEventListener('pageshow', function (ev) {
        let page = ev.target,
            pageId = page.id;
        if (pageId === 'main') {
            let main_listview = $('main-listview');
            if (localStorage.lastFile) {
                if ($('last_file')) {
                    let a = $('last_file');
                    a.parentNode.removeChild(a);
                }
                let filename = localStorage.lastFile.split('/').pop();
                main_listview.innerHTML = '<li class="li-has-multiline" id="last_file"><a onclick="' + openFunction(filename) + '(\'' + localStorage.lastFile + '\');">' + filename + '<span class="ui-li-sub-text li-text-sub">Last file</span></a></li>' + main_listview.innerHTML;
            }
            mlv = tau.widget.Listview(main_listview);
        } else if (pageId === 'files-page') {
            scanFiles();
        }
    });
    window.addEventListener('pagehide', function (ev) {
        let page = ev.target,
            pageId = page.id;
        if (pageId === 'main') {
            mlv.destroy();
        } else if (pageId === 'files-page') {
            flv.destroy();
            flv = null;
        }
    });
    window.addEventListener('tizenhwkey', function (ev) {
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
                    if (pdfView.page_number_picker_widget !== null) {
                        var ph = function () {
                            pdfView.page_number_picker_widget.destroy();
                            window.removeEventListener('pagehide', ph);
                            ph = null;
                        };
                        window.addEventListener('pagehide', ph);
                    }
                    if (pdfView.watch_page_interval) {
                        clearInterval(pdfView.watch_page_interval);
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
}());
