/*global tau */
var pdfView = {
    preview_page: document.getElementById("pdf-preview"),
    page_number_picker: document.getElementById("page-number-picker"),
    page_number_picker_widget: null,
    watch_page_interval: null,
    pdfDoc: null,
    page_number: 1,
    page_rendering: false,
    page_number_pending: null,
    page_scale: 1.2,
    canvas: document.getElementById('the-canvas'),
    ctx: null,
    preview_canvas: document.getElementById('canvas-pdf-preview'),
    preview_ctx: null,
    preview_scale: 0.17,
    renderPage: function(num) {
    	self = pdfView;
    	self.page_rendering = true;
    	self.pdfDoc.getPage(num).then(function(page) {
            var viewport = page.getViewport({
                scale: self.page_scale
            });
            self.canvas.height = viewport.height;
            self.canvas.width = viewport.width;

            var renderContext = {
                canvasContext: self.ctx,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);

            renderTask.promise.then(function() {
                tau.closePopup();
                self.page_rendering = false;
                if (self.page_number_pending !== null) {
                	self.renderPage(self.page_number_pending);
                	self.page_number_pending = null;
                }
            });
        });
        document.getElementById('page_num').textContent = num;
    },
    renderPreviewPage: function(num) {
    	self = pdfView;
    	self.page_rendering = true;
    	self.pdfDoc.getPage(num).then(function(page) {
            var viewport = page.getViewport({
                scale: self.preview_scale
            });
            self.preview_canvas.height = viewport.height;
            self.preview_canvas.width = viewport.width;

            var renderTask = page.render({
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
    	self = pdfView;
        if (self.page_rendering) {
        	self.page_number_pending = num;
        } else {
        	self.renderPage(num);
        }
    },
    prevPage: function() {
    	self = pdfView;
        if (self.page_number <= 1) {
            return;
        }
        self.page_number--;
        self.queueRenderPage(self.page_number);
    },
    nextPage: function() {
    	self = pdfView;
        if (self.page_number >= self.pdfDoc.numPages) {
            return;
        }
        self.page_number++;
        self.queueRenderPage(self.page_number);
    },
    bezelRotation: function(e) {
    	self = pdfView;
        if (e.detail.direction === 'CW') {
        	self.nextPage();
        } else if (e.detail.direction === 'CCW') {
        	self.prevPage();
        }
    },
    openPage: function() {
    	self = pdfView;
    	self.page_number = parseInt(self.page_number_picker.value);
        tau.changePage('pdf');
        self.renderPage(self.page_number);
        document.getElementsByTagName('meta').viewport.content = "width=device-width, initial-scale=1.0";
        window.addEventListener("rotarydetent", self.bezelRotation);
    },
    openPdf: function(pdfDoc_) {
    	self = pdfView;
    	self.pdfDoc = pdfDoc_;
    	self.page_number_picker.value = 1;
    	self.page_number_picker.max = self.pdfDoc.numPages;
        var picker_val = self.page_number_picker.value,
            page_timeout = -1;

        function watchPage() {
            if (picker_val != self.page_number_picker.value) {
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
        document.getElementById('page_count').textContent = self.pdfDoc.numPages;
    },
    openDocFile: function(name) {
        localStorage.lastFile = name;
        tau.openPopup('loading-popup');
        setTimeout(function() {
            tizen.filesystem.resolve(name, function(doc) {
                var documentpdf = doc;
                documentpdf.openStream('r', function(fs) {
                    var base64 = fs.readBase64(documentpdf.fileSize);
                    pdfjsLib.getDocument({
                        data: atob(base64)
                    }).promise.then(pdfView.openPdf);
                }, function(e) {
                    console.log(e);
                }, 'UTF-8');

            }, function(e) {
                console.log("Error" + e.message);
            }, "r");
        }, 200);
    },
    init: function() {
        this.ctx = this.canvas.getContext('2d');
        this.preview_ctx = this.preview_canvas.getContext('2d');
        this.preview_page.addEventListener("pagebeforeshow", function() {
            pdfView.page_number_picker_widget = tau.widget
                .NumberPicker(pdfView.page_number_picker);
        });
        document.getElementById('prev')
            .addEventListener('click', pdfView.prevPage);
        document.getElementById('next')
            .addEventListener('click', pdfView.nextPage);
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdfjs/pdf.worker.js';
    }
};
pdfView.init();