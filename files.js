/* global tau */
/* global flv */
/* global $ */
var files = {
    defaultDir: 'documents',
    types: ['pdf'],
    scanFiles: () => {
        tizen.filesystem.resolve(files.defaultDir,
            function(dir) {
                dir.listFiles(files.filterFiles, files.onError);
            },
            files.onError, "r");
    },
    filterFiles: (list) => {
    	let filesList = [];
        for (let f of list) {
            if (files.types.indexOf(f.name.split('.').pop().toLowerCase()) > -1) {
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
            html += '<li class="li-has-multiline"><a onclick="pdfView.openDocFile(\'' + file.path + '\');">' + file.name + '<span class="ui-li-sub-text li-text-sub">' + files.humanFileSize(file.size, false) + '</span></a></li>';
        }
        l.innerHTML = html;
        flv = tau.widget.Listview(l);
    },
    humanFileSize: (bytes, si) => {
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
    },
    onError: function(e){
    	console.log('Error', e);
    }
};