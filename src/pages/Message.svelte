<script>
  import {historyStore} from "../store"
  import Button from "../components/Button.svelte"
  import {onDestroy, onMount} from "svelte"
  import {bezelEventScroll} from "../utils"

  export let options
  let containerNode
  let closeTimeout

  onMount(() => {
    if (options.auto_close) closeTimeout = setTimeout(historyStore.goBack, 5000)
  })

  onDestroy(() => {
    if (closeTimeout) clearTimeout(closeTimeout)
  })
</script>

<svelte:window on:rotarydetent={(e) => bezelEventScroll(containerNode, e)} />

<div bind:this={containerNode} class="container">
  <div class="message">{options.message}</div>
  <div class="button">
    <Button on:click={historyStore.goBack}>Ok</Button>
  </div>
</div>

<style>
  .container {
    text-align: center;
    height: inherit;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .message {
    font-size: 1.7em;
    min-height: 360px;
    padding: 60px 2.0625rem 100px;
    box-sizing: border-box;
  }

  .button {
    left: 74px;
    margin-bottom: 14px;
    position: absolute;
    bottom: 0;
  }
</style>
