<script>
  import {fly} from "svelte/transition"

  export let buttons = []
  export let current = 0
  export let title = "Settings"
  let isOpen = false

  function buttonClick(i) {
    return () => {
      isOpen = false
      current = i
    }
  }
</script>

<div class="center-right open-button" on:click={() => isOpen = true}>
  <img alt="settings" src="/icons/more.svg">
</div>
{#if isOpen}
  <div class="wrapper" on:click={() => isOpen = false}>
    <div transition:fly={{x: 360}} class="center-right buttons-container">
      <div on:click={() => isOpen = false} class="close-button">
        <img src="/icons/right-arrow.svg" alt="close">
      </div>
      <div>
        <p class="title">{title}</p>
        {#each buttons as {id, image, label}}
          <div on:click={buttonClick(id)} class:active={id === current} class="button">
            <img src={image} alt="action" />
            <span>{label}</span>
          </div>
        {/each}
      </div>
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
        padding: 6px 30px 6px 1px;
        display: flex;
        align-items: stretch;
    }

    .button {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border-radius: 999px;
        height: 75px;
        width: 75px;
        box-sizing: border-box;
    }

    .button.active {
        background-color: #3a3a3a;
    }

    .button img {
        height: 36px;
    }

    .title {
        text-align: center;
        margin: 0 0 6px 0;
        font-size: 1.3em;
    }

    .open-button {
        padding: 10px;
    }

    .open-button img {
        height: 24px;
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
