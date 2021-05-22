<script>
  import GenericList from "../components/GenericList.svelte"
  import {configStore} from "../store"
  import {derived} from "svelte/store"

  const settings = derived(configStore, ($configs) => [
    {
      text: "Zoom buttons",
      subtitle: "show +- buttons in bottom",
      value: $configs.zoomButtons,
      key: "zoomButtons",
    },
    {
      text: "Bezel support",
      subtitle: "Does watch have bezel",
      value: $configs.supportBezel,
      key: "supportBezel",
    },
  ])

  function setSetting(key, value) {
    configStore.set(key, value)
  }

  $: console.log(settings)
</script>

<div class="w">
  <GenericList items={$settings} let:active let:item>
    <div
      class="item"
      class:active
      on:click={() => setSetting(item.key, item.value === "" ? "true" : "")}
    >
      <div>
        <div class="title">{item.text}</div>
        <div>{item.subtitle}</div>
      </div>
      <label class="toggle-control" class:checked={item.value}>
        <!--        <input type="checkbox" checked={item.value} on:click|preventDefault />-->
        <span class="control" />
      </label>
    </div>
  </GenericList>
</div>

<style>
  .item {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .title {
    font-weight: bold;
    font-size: 2em;
  }

  .active .title {
    font-size: 2.2em;
  }

  .toggle-control {
    position: relative;
    height: 30px;
    display: block;
    padding-left: 60px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
  }

  .toggle-control.checked .control {
    background-color: dodgerblue;
  }

  .toggle-control.checked .control:after {
    left: 33px;
  }

  .toggle-control .control {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 60px;
    border-radius: 15px;
    background-color: darkgray;
    transition: background-color 0.15s ease-in;
  }

  .toggle-control .control:after {
    content: "";
    position: absolute;
    left: 3px;
    top: 3px;
    width: 24px;
    height: 24px;
    border-radius: 15px;
    background: white;
    transition: left 0.15s ease-in;
  }
</style>
