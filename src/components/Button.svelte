<script>
  import {createEventDispatcher} from "svelte"

  const dispatch = createEventDispatcher()
</script>

<button on:click={() => dispatch("click")}>
  <slot />
</button>

<style>
  button {
    background: black;
    color: white;
    border: 3px green solid;
    border-radius: 50px;
    padding: 2px;
    margin-bottom: 10px;
    /*font-size: 1.6em;*/
    /*width: 100%;*/
    height: 4.5rem;
    width: 13.125rem;
    font-size: 1.75rem;
  }
</style>
