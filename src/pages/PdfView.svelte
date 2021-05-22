<script>
  import {configStore, docStore} from "../store"
  import {onMount} from "svelte"
  import InViewSettings from "../components/InViewSettings.svelte"
  import {bezelActions, bezelActionsButtons} from "../constants"
  import {bezelEventScroll} from "../utils"
  import InViewSettingsBlock from "../components/InViewSettingsBlock.svelte"

  export let options

  let currentPage = options.page
  let pagesCount = $docStore.numPages
  let canvas
  let canvasContext
  let containerNode
  let pageScale = 1
  let rendering = false
  let renderTask

  onMount(() => {
    canvasContext = canvas.getContext("2d")
  })

  function towards() {
    currentPage = currentPage < pagesCount ? currentPage + 1 : 1
  }

  function backwards() {
    currentPage = currentPage > 1 ? currentPage - 1 : pagesCount
  }

  function scaleUp() {
    if (pageScale < 2) pageScale += 0.2
  }

  function scaleDown() {
    if (pageScale > 0.6) pageScale -= 0.2
  }

  function renderPage(pageNum, pageScale) {
    if (rendering) renderTask.cancel()
    rendering = true

    $docStore.getPage(pageNum).then(function (pdfPage) {
      const viewport = pdfPage.getViewport({scale: pageScale})
      canvas.width = viewport.width
      canvas.height = viewport.height
      const ctx = canvas.getContext("2d")

      // TODO: очередь для рендера файлов
      renderTask = pdfPage.render({
        canvasContext: ctx,
        viewport,
      })
      renderTask.promise.then(() => (rendering = false))
    })
  }

  $: renderPage(currentPage, pageScale)

  function bezelRotate(e) {
    switch ($configStore.pdfAction) {
      case bezelActions.scale: {
        if (e.detail.direction === "CW") scaleUp()
        if (e.detail.direction === "CCW") scaleDown()
        break
      }
      case bezelActions.changePage: {
        if (e.detail.direction === "CW") towards()
        if (e.detail.direction === "CCW") backwards()
        break
      }
      case bezelActions.scroll: {
        bezelEventScroll(containerNode, e)
        break
      }
    }
  }

  const buttons = [
    bezelActionsButtons.scroll,
    bezelActionsButtons.scale,
    bezelActionsButtons.changePage,
  ]

  let {pdfAction} = $configStore
  $: configStore.set("pdfAction", pdfAction)
</script>

<svelte:window on:rotarydetent={bezelRotate} />
<div
  bind:this={containerNode}
  class="container"
  class:bottom-padding={!$configStore.supportBezel}
>
  <div class="buttons-block top">
    <button on:click={backwards} style="text-align: right;">&lt</button>
    <span>{currentPage}/{pagesCount}</span>
    <button on:click={towards} style="text-align: left;">&gt</button>
  </div>
  <canvas bind:this={canvas} />
  {#if $configStore.zoomButtons}
    <div class="buttons-block bottom">
      <button on:click={scaleDown} style="text-align: right;">-</button>
      <button on:click={scaleUp} style="text-align: left;">+</button>
    </div>
  {/if}
</div>
{#if $configStore.supportBezel}
  <InViewSettings>
    <InViewSettingsBlock
      bind:current={pdfAction}
      {buttons}
      title="Action on bezel"
    />
  </InViewSettings>
{/if}

<style>
  .buttons-block {
    width: 360px;
    display: flex;
    position: absolute;
    left: 0;
  }

  .buttons-block.top {
    top: 0;
  }

  .buttons-block.bottom {
    bottom: 0;
  }

  .buttons-block button {
    color: #605f5f;
    flex-grow: 1;
    height: 50px;
    border: none;
    background-color: inherit;
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
    padding-top: 50px;
    overflow: scroll;
    scroll-behavior: smooth;
    height: inherit;
    width: inherit;
    border-radius: 160px;
    background-color: white;
    box-sizing: border-box;
  }
  .container.bottom-padding {
    padding-bottom: 50px;
  }
</style>
