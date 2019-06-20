var filesList = [];
function filterFiles(files) {
	for ( var f in files) {
		if (files[f].name.split('.').pop() == 'pdf' || files[f].name.split('.').pop() == 'PDF') {
			filesList.push({
				name : files[f].name,
				path : files[f].fullPath,
				modified : files[f].modified,
				size : files[f].fileSize
			});
		}
	}
	updateList();
}

function scanFiles() {
	tizen.filesystem.resolve("documents",
					function(dir) {
						dir.listFiles(filterFiles,
									function(error) {
										console.log("The error " + error.message
													+ " occurred when listing the files in the selected folder");
									});
					}, function(e) {
						console.log("Error " + e.message);
					}, "r");
}
function updateList() {
	var l = document.getElementById('files-list');
	var html = '';
	for (var f in filesList){
		html+= '<li class="li-has-multiline"><a onclick="openDoc(\'' + filesList[f].path + '\');">'+ filesList[f].name + '<span class="ui-li-sub-text li-text-sub">'+humanFileSize(filesList[f].size, false)+'</span></a></li>';
	}
	l.innerHTML = html;
	tau.widget.Listview(l);
}
function humanFileSize(bytes, si) {
    var thresh = si ? 1000 : 1024;
    if(Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = si
        ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
        : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while(Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1)+' '+units[u];
}
(function() {
	scanFiles();
}());