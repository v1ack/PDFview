<script>
  /* global tizen */
  import Button from "../components/Button.svelte"
  import List from "../components/List.svelte"
  import pdfjsLib from "pdfjs-dist/es5/build/pdf"
  import {onMount} from "svelte"
  import {fade} from "svelte/transition"
  import {isDev, pages} from "../constants"
  import {docStore, historyStore} from "../store"
  import Loader from "../components/Loader.svelte"

  let canvas
  let pdfDocFile
  let pdfDoc
  let rendering = false
  let renderTask
  let currentPage = 1
  let fileLoaded = false

  pdfjsLib.GlobalWorkerOptions.workerSrc = "pdf_worker.js"

  let items = ["..."]

  export let options

  function getPdfDocFile(path) {
    return new Promise((resolve, reject) => {
      tizen.filesystem.resolve(
        path,
        function(doc) {
          if (doc.fileSize > 10485760)
            alert("This file is big, it can cause error")
          doc.openStream(
            "r",
            (fs) => {
              let r = pdfjsLib.getDocument({
                data: fs.readBytes(doc.fileSize)
              })
              resolve(r)
            },
            reject,
            "UTF-8"
          )
        },
        reject,
        "r"
      )
    })
  }

  function getPdfDocFileDev(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(pdfjsLib.getDocument(path)), 500)
    })
  }

  async function loadFileByPath(path) {
    if (isDev) pdfDocFile = await getPdfDocFileDev(path)
    else pdfDocFile = await getPdfDocFile(path)

    pdfDocFile.promise
      .then((pdf) => {
        pdfDoc = pdf
        pdf.destroy = pdfDocFile.destroy
        docStore.set(pdf)
        return pdf
      })
      .then((pdf) => {
        items = [...Array(pdf.numPages).keys()].map((i) => i + 1)
      })
      .then(() => renderPreview(1))
  }

  onMount(async () => {
    if ($docStore) {
      items = [...Array($docStore.numPages).keys()].map((i) => i + 1)
      renderPreview(1)
    } else await loadFileByPath(options.path)
    fileLoaded = true
  })

  function back(e) {
    if (e.keyName === "back") docStore.clear()
  }

  function renderPreview(pageNum) {
    if (isDev) console.log("draw", pageNum)

    // TODO: очередь для рендера файлов
    if (rendering) renderTask.cancel()
    rendering = true

    $docStore.getPage(pageNum).then(function(pdfPage) {
      const viewport = pdfPage.getViewport({scale: 0.17})
      canvas.width = viewport.width
      canvas.height = viewport.height
      const ctx = canvas.getContext("2d")
      renderTask = pdfPage.render({
        canvasContext: ctx,
        viewport
      })
      renderTask.promise.then(() => (rendering = false))
    })
  }

  let timeout

  function select(e) {
    clearTimeout(timeout)
    currentPage = e.detail.index + 1
    setTimeout(() => renderPreview(currentPage), 350)
  }

  function openFile() {
    historyStore.goTo(pages.pdfView, {page: currentPage})
  }
</script>

<svelte:window on:tizenhwkey={back} />
<div class="main">
  <div class="container">
    <div class="list">
      <List height={200} {items} on:select={select} title="Page" />
    </div>
    <canvas bind:this={canvas}>Loading</canvas>
    {#if rendering}
      <div class="loader" transition:fade>
        <Loader color="rgb(20, 182, 255)" />
      </div>
    {/if}
  </div>
  {#if fileLoaded}
    <div class="button">
      <Button on:click={openFile}>Open</Button>
    </div>
  {/if}
</div>

<style>
    .button {
        position: absolute;
        bottom: 0;
        left: 20%;
        margin-bottom: 10px;
    }

    .container {
        position: relative;
        padding-top: 80px;
        padding-left: 2.0625rem;
        padding-right: 2.0625rem;
    }

    canvas {
        position: absolute;
        left: 200px;
    }

    .list {
        position: absolute;
        height: 200px;
        width: 140px;
    }

    .main {
        height: 360px;
        position: relative;
    }

    .loader {
        position: absolute;
        left: 205px;
        top: 140px;
    }
</style>
