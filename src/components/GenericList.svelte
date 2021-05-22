<script>
  import {createEventDispatcher} from "svelte"
  import {scrollTo} from "../utils"

  export let title
  export let items
  export let height = 360
  export let itemsShow = 3
  /**
   * Выбранный элемент
   * @type {number}
   */
  export let chosen = 0

  const dispatch = createEventDispatcher()

  let itemHeight = height / itemsShow

  /**
   * ID таймаута скролла
   * @type {number}
   */
  let scrollTimeout

  /**
   * ID таймаута выбора элемента
   * @type {number}
   */
  let selectTimeout
  let containerNode

  /**
   * Предыдущий выбранный элемент. Нужен чтобы понимать произошли ли изменения
   * @type {number}
   */
  let lastChosen = 0

  function scroll(e) {
    let scrollTop = e.target.scrollTop
    let new_chosen =
      Math.round((scrollTop + height / 2 + itemHeight / 2) / itemHeight) - 2

    if (new_chosen !== chosen) {
      lastChosen = chosen
      chosen = new_chosen
      if (selectTimeout) clearTimeout(selectTimeout)
      selectTimeout = setTimeout(() => {
        dispatch("select", {index: chosen})
      }, 500)
    }

    if (scrollTimeout) clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      let scroll = itemHeight * chosen
      scrollTo(containerNode, 0, scroll)
    }, 300)
  }

  function bezelRotate(e) {
    if (e.detail.direction === "CW" && chosen < items.length - 1) {
      chosen = chosen + 1
      scrollTo(containerNode, 0, itemHeight * chosen)
    }
    if (e.detail.direction === "CCW" && chosen > 0) {
      chosen = chosen - 1
      scrollTo(containerNode, 0, itemHeight * chosen)
    }
  }
</script>

<svelte:window on:rotarydetent={bezelRotate} />

<div
  bind:this={containerNode}
  class="cont"
  on:scroll={scroll}
  style="height: {height}px;"
>
  <div class="item fake-item" style="height: {itemHeight}px;">
    {#if title}
      <div class="title" style="color: #14b6ff">{title}</div>
    {/if}
  </div>
  <!-- TODO: добавить id -->
  {#each items as item, i (item.title || item)}
    <div
      on:click={() => dispatch("click", item)}
      class:active={chosen === i}
      class="item"
      style="height: {itemHeight}px;"
    >
      <slot {item} active={chosen === i} />
    </div>
  {/each}
  <div class="fake-item" style="height: {itemHeight}px;" />
</div>

<style>
  .item {
    text-align: center;
    margin: 0;
    box-sizing: border-box;
    border-radius: 99px;
    transition: background ease-in-out 0.5s;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .cont {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .active {
    background: #3a3a3a;
  }

  .title {
    font-weight: bold;
    font-size: 2em;
  }

  .active .title {
    font-size: 2.2em;
  }

  .subtitle {
    font-size: 1.8em;
    /* TODO: сделать плавающий текст */
    max-height: 72px;
    overflow: hidden;
    word-break: break-all;
  }

  .title {
    max-width: 100%;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
  }

  .title span {
    display: inline-block;
  }

  .title :global(span.animated) {
    animation: marquee 10s ease-in-out alternate infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(calc(-100% + 340px));
    }
  }
</style>
