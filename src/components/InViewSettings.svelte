<script>
  import {fly} from "svelte/transition"

  let isOpen = false
</script>

<div class="center-right open-button" on:click={() => (isOpen = true)}>
  <img alt="settings" src="/icons/more.svg" />
</div>
{#if isOpen}
  <div
    class="wrapper"
    on:click={() => (isOpen = false)}
    transition:fly={{x: 360}}
  >
    <div class="center-right buttons-container">
      <div on:click={() => (isOpen = false)} class="close-button">
        <img src="/icons/right-arrow.svg" alt="close" />
      </div>
      <slot />
    </div>
  </div>
{/if}

<style>
  .center-right {
    top: 50%;
    right: 0;
    position: absolute;
    transform: translateY(-50%);
  }

  .buttons-container {
    background-color: black;
    border-radius: 40px 0 0 40px;
    padding: 6px 10px 6px 1px;
    display: flex;
    align-items: stretch;
  }

  .open-button {
    padding: 10px;
  }

  .open-button img {
    height: 28px;
  }

  .close-button img {
    height: 38px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
