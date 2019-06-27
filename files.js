var files = {
    filesList: [],
    scanFiles: function() {
        tizen.filesystem.resolve("documents",
            function(dir) {
                dir.listFiles(files.filterFiles,
                    function(error) {
                        console.log("The error " + error.message +
                            " occurred when listing the files in the selected folder");
                    });
            },
            function(e) {
                console.log("Error " + e.message);
            }, "r");
    },
    filterFiles: function(list) {
    	files.filesList = [];
        for (var f in list) {
            if (list[f].name.split('.').pop() == 'pdf' || list[f].name.split('.').pop() == 'PDF') {
                files.filesList.push({
                    name: list[f].name,
                    path: list[f].fullPath,
                    modified: list[f].modified,
                    size: list[f].fileSize
                });
            }
        }
        files.updateList();
    },    
    updateList: function() {
        var l = document.getElementById('files-list'),
            html = '';
        for (var f in files.filesList) {
            var file = files.filesList[f];
            html += '<li class="li-has-multiline"><a onclick="pdfView.openDocFile(\'' + file.path + '\');">' + file.name + '<span class="ui-li-sub-text li-text-sub">' + files.humanFileSize(file.size, false) + '</span></a></li>';
        }
        l.innerHTML = html;
        flv = tau.widget.Listview(l);
    },
    humanFileSize: function(bytes, si) {
        var thresh = si ? 1000 : 1024;
        if (Math.abs(bytes) < thresh) {
            return bytes + ' B';
        }
        var units = si ?
            ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] :
            ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        var u = -1;
        do {
            bytes /= thresh;
            ++u;
        } while (Math.abs(bytes) >= thresh && u < units.length - 1);
        return bytes.toFixed(1) + ' ' + units[u];
    }
};