<script>
  import {historyStore} from "./store"
  import {routes} from "./routes"
  import {scale} from "svelte/transition"
  import {SAServer} from "./saservice"

  SAServer()

  $: console.debug($historyStore)

  function back(e) {
    if (e.keyName === "back") historyStore.goBack()
  }

</script>
<svelte:window on:tizenhwkey={back} />
<div class="background" class:dev-circle={is_dev}>
  {#each Object.keys(routes) as routeId}
    {#if $historyStore.pageId == routeId}
      <div class="animated" transition:scale={{start: 0.7}}>
        <svelte:component this={routes[routeId]} options={$historyStore.options} />
      </div>
    {/if}
  {/each}
</div>

<style>
    .background {
        height: 360px;
        width: 360px;
        box-sizing: border-box;
    }

    .dev-circle {
        border: 1px solid white;
        border-radius: 999px;
    }

    .animated {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
</style>
