/**
 * Creates a SAP socket and accepts an incoming connection.
 * @appName         {String} appName Application peerAgent name.
 * @onFileTransfer  {Function} onFileTransfer Method executed after socket successful connection with SAFileTransfer as argument.
 * @onerror         {Function} onerror Method executed after socket connection failure with error code as argument.
 */
function SAServerOpen(appName, onFileTransfer, onerror) {
    'use strict';
    webapis.sa.requestSAAgent(function(agents) {
        if (agents.length > 0) {
            var SAAgent = agents[0];
            SAAgent.setServiceConnectionListener({
                onrequest: function(peerAgent) {
                    if (peerAgent.appName == appName) {
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
    'use strict';
    let f = (id) => document.getElementById(id);
    let progress = f("sa-file-progress"),
        ratio = f("sa-file-ratio"),
        name = f("sa-file-name"),
        button = f("sa-file-button");

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

/**
 * Shows element, which contains message.
 * @id  {String} Element id.
 */
function showNote(id) {
    'use strict';
    let note = document.getElementById("msg-" + id.toLocaleLowerCase());
    note.style.display = 'inline-block';
    tau.openPopup('sa-toast');
    setTimeout(() => {
        note.style.display = 'none';
    }, 3000)
}

/**
 * Shows message based on error code.
 * @error   {String} Error code.
 */
function onerror(error) {
    'use strict';
    window.history.back();
    showNote(error);
}
try {
    SAServerOpen("FileTransferSender", onFileTransfer, onerror);
} catch (error) {
    console.log("FileTransferReceiver: " + error.name + "( " + error.message + " )");
}

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
    } catch (err) {
        // launcher error
    }
}