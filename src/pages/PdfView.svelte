<script>
  import {docStore} from "../store"
  import {onMount} from "svelte"

  export let options

  let currentPage = options.page
  let pagesCount = $docStore.numPages
  let canvas
  let canvasContext
  let pageScale = 1
  let rendering = false
  let renderTask

  onMount(() => {
    canvasContext = canvas.getContext("2d")
  })

  function towards() {
    if (currentPage < pagesCount)
      currentPage += 1
    else currentPage = 1
  }

  function backwards() {
    if (currentPage > 1)
      currentPage -= 1
    else currentPage = pagesCount
  }

  function renderPage(pageNum, pageScale) {
    if (rendering)
      renderTask.cancel()
    rendering = true

    $docStore.getPage(pageNum).then(function(pdfPage) {
      const viewport = pdfPage.getViewport({scale: pageScale})
      canvas.width = viewport.width
      canvas.height = viewport.height
      const ctx = canvas.getContext("2d")

      // TODO: очередь для рендера файлов
      renderTask = pdfPage.render({
        canvasContext: ctx,
        viewport
      })
      renderTask.promise.then(() => rendering = false)
    })
  }

  $: renderPage(currentPage, pageScale)

  function bezelRotate(e) {
    if (e.detail.direction === "CW" && pageScale < 2) {
      pageScale += 0.2
    }
    if (e.detail.direction === "CCW" && pageScale > 0.6) {
      pageScale -= 0.2
    }
  }
</script>

<svelte:window on:rotarydetent={bezelRotate} />
<div class="container">
  <div class="buttons-block">
    <button on:click={backwards} style="text-align: right;">&lt</button>
    <span>{currentPage}/{pagesCount}</span>
    <button on:click={towards} style="text-align: left;">&gt</button>
  </div>
  <canvas bind:this={canvas}></canvas>
</div>

<style>
    canvas {
        margin-top: 50px;
    }

    .buttons-block {
        width: 360px;
        display: flex;
        position: fixed;
    }

    .buttons-block button {
        flex-grow: 1;
        height: 50px;
        border: none;
        background-color: white;
        font-size: 1.4em;
        padding: 0 50px;
    }

    .buttons-block span {
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        top: 10px;
        color: black;
        font-size: 1.3em;
    }

    .container {
        overflow: scroll;
        height: inherit;
        width: inherit;
    }
</style>
