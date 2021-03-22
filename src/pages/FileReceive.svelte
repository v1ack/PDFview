<script>
  import Button from "../components/Button.svelte"

  export let options
  let progress = options.progress

</script>

<header class="ui-header">
  <h2 class="ui-title">File Receiver</h2>
</header>
<div id="sa-file-content">
  <progress max="100" value={$progress}></progress>
  <div>{options.filename}</div>
  <Button on:click={options.cancel}>Cancel</Button>
</div>
