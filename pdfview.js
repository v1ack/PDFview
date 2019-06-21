var preview_page = document.getElementById("pdf-preview"),
    pdf_page_picker = document.getElementById("page-number-picker"),
    pdf_page_picker_widget = null;

preview_page.addEventListener("pagebeforeshow", function() {
    pdf_page_picker_widget = tau.widget.NumberPicker(pdf_page_picker);
});

var watch_page_interval = null;

var pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdfjs/pdf.worker.js';

var pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 1.2,
    canvas = document.getElementById('the-canvas'),
    ctx = canvas.getContext('2d');

function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(function(page) {
        var viewport = page.getViewport({
            scale: scale
        });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);

        renderTask.promise.then(function() {
            tau.closePopup()
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
    document.getElementById('page_num').textContent = num;
}

function renderPreviewPage(num) {
    var c_canvas = document.getElementById('canvas-pdf-preview'),
        c_ctx = c_canvas.getContext('2d'),
        c_scale = 0.17;
    pageRendering = true;
    pdfDoc.getPage(num).then(function(page) {
        var viewport = page.getViewport({
            scale: c_scale
        });
        c_canvas.height = viewport.height;
        c_canvas.width = viewport.width;

        var renderTask = page.render({
            canvasContext: c_ctx,
            viewport: viewport
        });

        renderTask.promise.then(function() {
            tau.closePopup()
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}
document.getElementById('prev').addEventListener('click', onPrevPage);

function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}
document.getElementById('next').addEventListener('click', onNextPage);

function onBezelPageChange(e) {
    if (e.detail.direction == 'CW') {
        onNextPage();
    } else if (e.detail.direction == 'CCW') {
        onPrevPage();
    }
}

function openPage() {
    pageNum = parseInt(pdf_page_picker.value);
    tau.changePage('pdf');
    renderPage(pageNum);
    document.getElementsByTagName('meta')['viewport'].content = "width=device-width, initial-scale=1.0";
    window.addEventListener("rotarydetent", onBezelPageChange);
}

function openPdf(pdfDoc_) {
    pdfDoc = pdfDoc_;
    pdf_page_picker.value = 1;
    pdf_page_picker.max = pdfDoc.numPages;
    var picker_val = pdf_page_picker.value,
        page_timeout = -1;

    function watchPage() {
        if (picker_val != pdf_page_picker.value) {
            if (page_timeout !== -1) {
                clearTimeout(page_timeout);
            }
            page_timeout = setTimeout(function() {
                renderPreviewPage(parseInt(pdf_page_picker.value));
            }, 400);
            picker_val = pdf_page_picker.value;
        }
    }

    watch_page_interval = setInterval(watchPage, 100);
    tau.changePage('pdf-preview');
    preview_page.childNodes[5].removeChild(preview_page.childNodes[5].childNodes[3]);
    setTimeout(function() {
        pdf_page_picker.parentElement.childNodes[0].click();
    }, 300);

    renderPreviewPage(1);
    document.getElementById('page_count').textContent = pdfDoc.numPages;
}

function openDocFile(name) {
    tau.openPopup('loading-popup');
    setTimeout(function() {
        tizen.filesystem.resolve(
            name,
            function(doc) {
                var documentpdf = doc;
                documentpdf.openStream('r',
                    function(fs) {
                        var base64 = fs.readBase64(documentpdf.fileSize);
                        pdfjsLib.getDocument({
                            data: atob(base64)
                        }).promise.then(openPdf);
                    },
                    function(e) {
                        console.log(e);
                    }, 'UTF-8'
                );

            },
            function(e) {
                console.log("Error" + e.message);
            }, "r"
        );
    }, 200);
}