<script>
  import {historyStore} from "../store"
  import Button from "../components/Button.svelte"
  import {onMount} from "svelte"

  export let options

  onMount(() => {
    if (options.autoclose)
      setTimeout(historyStore.goBack, 5000)
  })
</script>

<div>
  {options.message}
  <Button on:click={historyStore.goBack}>Ok</Button>
</div>
