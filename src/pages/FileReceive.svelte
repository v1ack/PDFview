<script>
  import Button from "../components/Button.svelte"

  export let options
  let progress = options.progress

</script>

<div class="container">
  <header>
    <h2>Receiving file</h2>
  </header>
  <div class="filename">{options.filename}</div>
  <progress max="100" value={$progress}></progress>
  <div class="button">
    <Button on:click={options.cancel}>Cancel</Button>
  </div>
</div>

<style>
    .container {
        position: relative;
        height: inherit;
        width: inherit;
    }

    .filename {
        text-align: center;
        top: 35px;
        position: relative;
        font-size: 1.5em;
    }

    progress {
        box-sizing: border-box;
        width: 90%;
        margin: 0 5%;
        position: relative;
        top: 60px;
        height: 30px;
    }

    header {
        padding: 60px 2.0625rem 20px;
        box-sizing: border-box;
        text-align: center;
    }

    header h2 {
        font-size: 1.8em;
        margin: 0;
    }

    .button {
        left: 74px;
        margin-bottom: 14px;
        position: absolute;
        bottom: 0;
    }
</style>
