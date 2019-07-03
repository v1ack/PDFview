/* global tau */
/* global pdfjsLib */
/* global $ */
var pdfView = {
    k: 2,
    preview_page: $("pdf-preview"),
    page_number_picker: $("page-number-picker"),
    page_number_picker_widget: null,
    watch_page_interval: null,
    pdfDoc: null,
    page_number: 1,
    page_rendering: false,
    page_number_pending: null,
    page_scale: 1.2,
    m1: 6,
    canvas: $('canvas-pdf'),
    ctx: null,
    preview_canvas: $('canvas-pdf-preview'),
    preview_ctx: null,
    preview_scale: 0.17,
    renderPage: function(num) {
    	let self = pdfView;
    	self.page_rendering = true;
    	self.pdfDoc.getPage(num).then(function(page) {
            let viewport = page.getViewport({
                scale: self.page_scale
            });
            self.canvas.height = viewport.height;
            self.canvas.width = viewport.width;

            let renderContext = {
                canvasContext: self.ctx,
                viewport: viewport
            };
            let renderTask = page.render(renderContext);

            renderTask.promise.then(function() {
                tau.closePopup();
                self.page_rendering = false;
                if (self.page_number_pending !== null) {
                	self.renderPage(self.page_number_pending);
                	self.page_number_pending = null;
                }
            });
        });
        $('page_num').textContent = num;
    },
    renderPreviewPage: function(num) {
    	let self = pdfView;
    	self.page_rendering = true;
    	self.pdfDoc.getPage(num).then(function(page) {
            let viewport = page.getViewport({
                scale: self.preview_scale
            });
            self.preview_canvas.height = viewport.height;
            self.preview_canvas.width = viewport.width;

            let renderTask = page.render({
                canvasContext: self.preview_ctx,
                viewport: viewport
            });

            renderTask.promise.then(function() {
                tau.closePopup();
                self.page_rendering = false;
                if (self.page_number_pending !== null) {
                	self.renderPreviewPage(self.page_number_pending);
                	self.page_number_pending = null;
                }
            });
        });
    },
    queueRenderPage: function(num) {
    	let self = pdfView;
        if (self.page_rendering) {
        	self.page_number_pending = num;
        } else {
        	self.renderPage(num);
        }
    },
    prevPage: function() {
    	let self = pdfView;
        if (self.page_number <= 1) {
            return;
        }
        self.page_number--;
        self.queueRenderPage(self.page_number);
    },
    nextPage: function() {
    	let self = pdfView;
        if (self.page_number >= self.pdfDoc.numPages) {
            return;
        }
        self.page_number++;
        self.queueRenderPage(self.page_number);
    },
    bezelRotation: function(e) {
    	let self = pdfView;
        if (e.detail.direction === 'CW') {
        	self.nextPage();
        } else if (e.detail.direction === 'CCW') {
        	self.prevPage();
        }
    },
    openPage: function() {
    	let self = pdfView;
    	self.page_number = parseInt(self.page_number_picker.value);
        tau.changePage('pdf');
        self.renderPage(self.page_number);
        document.getElementsByTagName('meta').viewport.content = "width=device-width, initial-scale=1.0";
        window.addEventListener("rotarydetent", self.bezelRotation);
    },
    openPdf: function(pdfDoc_) {
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
                    function() {
                    	self.renderPreviewPage(parseInt(self.page_number_picker.value));
                    }, 400);
                picker_val = self.page_number_picker.value;
            }
        }
        self.watch_page_interval = setInterval(watchPage, 100);
        tau.changePage('pdf-preview');
        self.preview_page.childNodes[5]
            .removeChild(self.preview_page.childNodes[5].childNodes[3]);
        setTimeout(function() {
        	self.page_number_picker.parentElement.childNodes[0].click();
        }, 300);
        self.renderPreviewPage(1);
        $('page_count').textContent = self.pdfDoc.numPages;
    },
    openDocFile: function(name) {
	let a = new Set();
	if (localStorage.l != undefined){
	    let f = JSON.parse(localStorage.l);
	    f.forEach((v, c, ar) => {a.add(v)});
	}
	if (a.has(name) || a.size < pdfView.m1/pdfView.k){
	    a.add(name);
	    let b = [];
	    a.forEach((v, v2, set) => (b.push(v)));
	    localStorage.l = JSON.stringify(b);
	} else {
	    tau.openPopup('demo-popup');
	    return;
	}
	
        localStorage.lastFile = name;
        tau.openPopup('loading-popup');
        setTimeout(function() {
            tizen.filesystem.resolve(name, function(doc) {
                doc.openStream('r', (fs) => {
                    let base64 = fs.readBase64(doc.fileSize);
                    pdfjsLib.getDocument({
                        data: atob(base64)
                    }).promise.then(pdfView.openPdf);
                }, pdfView.onError, 'UTF-8');
            }, pdfView.onError, "r");
        }, 200);
    },
    init: function() {
        this.ctx = this.canvas.getContext('2d');
        this.preview_ctx = this.preview_canvas.getContext('2d');
        this.preview_page.addEventListener("pagebeforeshow", function() {
            pdfView.page_number_picker_widget = tau.widget
                .NumberPicker(pdfView.page_number_picker);
        });
        $('prev').addEventListener('click', pdfView.prevPage);
        $('next').addEventListener('click', pdfView.nextPage);
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdfjs/pdf.worker.js';
    },
    onError: (e) => {
	console.log('Error', e);
    }
};
pdfView.init();