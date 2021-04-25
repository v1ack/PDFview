<script>
  export let buttons = []
  export let current = 0
  export let title = "Settings"
</script>

<div>
  <p class="title">{title}</p>
  {#each buttons as {id, image, label}}
    <div
      on:click={() => (current = id)}
      class:active={id === current}
      class="button"
    >
      <img src={image} alt="action" />
      <span>{label}</span>
    </div>
  {/each}
</div>

<style>
    .button {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        padding: 7px;
        border-radius: 999px;
        height: 70px;
        width: 70px;
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
</style>
