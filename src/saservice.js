/* global webapis */
import {historyStore} from "./store"
import {pages, saMessages} from "./constants"
import {tweened} from "svelte/motion"
import {cubicOut} from "svelte/easing"

export function SAServer() {
  /**
   * Shows message based on error code.
   * @error   {String} Error code.
   */
  function onerror(error) {
    historyStore.goBack()
    showNote(error, false)
  }

  /**
   * Shows element, which contains message.
   * @id  {String} Element id.
   */
  function showNote(id, auto_close = true) {
    historyStore.goTo(pages.message, {
      message: saMessages[id.toLocaleLowerCase()],
      auto_close
    })
  }

  /**
   * Creates a SAP socket and accepts an incoming connection.
   * @appName         {String} appName Application peerAgent name.
   * @onFileTransfer  {Function} onFileTransfer Method executed after socket successful connection with SAFileTransfer as argument.
   * @onerror         {Function} onerror Method executed after socket connection failure with error code as argument.
   */
  function SAServerOpen(appName, onFileTransfer, onerror) {
    webapis.sa.requestSAAgent(function(agents) {
      if (agents.length > 0) {
        let SAAgent = agents[0]
        SAAgent.setServiceConnectionListener({
          onrequest: (peerAgent) => {
            if (peerAgent.appName === appName)
              SAAgent.acceptServiceConnectionRequest(peerAgent)
            else SAAgent.rejectServiceConnectionRequest(peerAgent)
          },
          onconnect: (socket) => {
            socket.setSocketStatusListener((reason) => socket.close())
            showNote("onconnect")
          },
          onerror: onerror
        })
        onFileTransfer(SAAgent.getSAFileTransfer())
      }
    })
  }

  /**
   * Creates a gui and accepts file connections.
   * @SAFileTransfer  {SAFileTransfer} File Transfer object between a Service Provider and Service Consumer.
   */
  function onFileTransfer(SAFileTransfer) {
    // let progress = $("sa-file-progress"),
    //   ratio = $("sa-file-ratio"),
    //   name = $("sa-file-name"),
    //   button = $("sa-file-button")
    const progress = tweened(0, {
      duration: 400,
      easing: cubicOut
    })

    SAFileTransfer.setFileReceiveListener({
      onreceive: function(id, fileName) {
        function cancel() {
          try {
            SAFileTransfer.cancelFile(id)
          } catch (err) {
            onerror("peeragent_no_response")
          }
        }

        progress.set(0)
        historyStore.goTo(pages.fileReceive, {
          progress,
          filename: fileName,
          cancel
        })

        // progress.value = 0
        // name.innerHTML = fileName
        // ratio.innerHTML = "0%"

        // tau.changePage("sa-files")

        // button.onclick =
        try {
          SAFileTransfer.receiveFile(id, "documents/" + fileName)
        } catch (e) {
          onerror("unknown_error")
        }
      },
      onprogress: function(id, value) {
        progress.set(value)
        // progress.value = value
        // ratio.innerHTML = value + "%"
      },
      oncomplete: function(id, localPath) {
        onerror("oncomplete")
      },
      onerror: onerror
    })
  }

  try {
    SAServerOpen("PDFview", onFileTransfer, onerror)
  } catch (error) {
    console.log("PDFview: " + error.name + "( " + error.message + " )")
  }
}
