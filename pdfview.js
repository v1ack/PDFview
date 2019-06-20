var preview_page = document.getElementById("pdf-preview"),
	pdf_page_picker = document.getElementById("page-number-picker"),
	pdf_page_picker_widget = null;

preview_page.addEventListener("pagebeforeshow", function() {
	pdf_page_picker_widget = tau.widget.NumberPicker(pdf_page_picker);
});

var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdfjs/pdf.worker.js';

var pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 1.2,
    canvas = document.getElementById('the-canvas'),
    ctx = canvas.getContext('2d');

/**
 * Get page info from document, resize canvas accordingly, and render page.
 * @param num Page number.
 */
function renderPage(num) {
    pageRendering = true;
    // Using promise to fetch the page
    pdfDoc.getPage(num).then(function(page) {
        var viewport = page.getViewport({
            scale: scale
        });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);

        // Wait for rendering to finish
        renderTask.promise.then(function() {
            tau.closePopup()
            pageRendering = false;
            if (pageNumPending !== null) {
                // New page rendering is pending
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    // Update page counters
    document.getElementById('page_num').textContent = num;
}

function renderPreviewPage(num) {
    var c_canvas = document.getElementById('canvas-pdf-preview'),
        c_ctx = c_canvas.getContext('2d'),
        c_scale = 0.17;
    pageRendering = true;
    // Using promise to fetch the page
    pdfDoc.getPage(num).then(function(page) {
        var viewport = page.getViewport({
            scale: c_scale
        });
        c_canvas.height = viewport.height;
        c_canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderTask = page.render({
            canvasContext: c_ctx,
            viewport: viewport
        });

        // Wait for rendering to finish
        renderTask.promise.then(function() {
            tau.closePopup()
            pageRendering = false;
            if (pageNumPending !== null) {
                // New page rendering is pending
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

/**
 * Displays previous page.
 */
function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}
document.getElementById('prev').addEventListener('click', onPrevPage);

/**
 * Displays next page.
 */
function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}
document.getElementById('next').addEventListener('click', onNextPage);

function openPage(){
	pageNum=parseInt(pdf_page_picker.value);
	tau.changePage('pdf');
	renderPage(pageNum);
}
/**
 * Asynchronously downloads PDF. '/opt/usr/media/Documents/0.pdf'
 */
function openDoc(name) {
    tau.openPopup('loading-popup');
    if (pdf_page_picker_widget != null){
    	pdf_page_picker_widget.destroy();
    }
    setTimeout(function() {
        tizen.filesystem.resolve(
            name,
            function(doc) {
                var documentpdf = doc;
                console.log(documentpdf);
                documentpdf.openStream('r',
                    function(fs) {
                        var base64 = fs.readBase64(documentpdf.fileSize);
                        pdfjsLib.getDocument({
                            data: atob(base64)
                        }).promise.then(function(pdfDoc_) {
                            pdfDoc = pdfDoc_;
                            pdf_page_picker.max = pdfDoc.numPages;
                            // Initial/first page rendering
                            var picker_val = pdf_page_picker.value,
                            page_timeout = -1;
                            function watchPage() {
								if (picker_val != pdf_page_picker.value){
									if (page_timeout !== -1){
									clearTimeout(page_timeout);}
									page_timeout = setTimeout(function() {
										renderPreviewPage(parseInt(pdf_page_picker.value));
									}, 400);
									picker_val = pdf_page_picker.value;
								}
							}
                            
                            setInterval(watchPage, 100);
                            tau.changePage('pdf-preview');
                            preview_page.childNodes[5].removeChild(preview_page.childNodes[5].childNodes[3]);
                            setTimeout(function() {
                            	pdf_page_picker.parentElement.childNodes[0].click();
							}, 300);
                            
                            renderPreviewPage(1);
                            document.getElementById('page_count').textContent = pdfDoc.numPages;
                        });
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