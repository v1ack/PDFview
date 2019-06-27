/* global tau */
/* global files */
/* global pdfView */
// beforehide, beforeshow, hide, show
var mlv = null,
    flv = null;
window.addEventListener('pageshow', function(ev) {
    let page = ev.target,
        pageId = page.id;
    if (pageId === 'main') {
        main_listview = document.getElementById('main-listview');
        if (localStorage.lastFile) {
            filename = localStorage.lastFile.split('/');
            filename = filename[filename.length - 1];
            main_listview.innerHTML = '<li class="li-has-multiline"><a onclick="pdfView.openDocFile(\'' + localStorage.lastFile + '\');">' + filename + '<span class="ui-li-sub-text li-text-sub">Last file</span></a></li>' + main_listview.innerHTML;
        }
        mlv = tau.widget.Listview(main_listview);
    } else if (pageId === 'files-page') {
        files.scanFiles();
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
                if (pdfView.page_number_picker_widget !== null) {
                    pdfView.page_number_picker_widget.destroy();
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
