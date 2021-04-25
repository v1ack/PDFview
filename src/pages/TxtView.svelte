<script>
  /* global tizen */
  import {onMount} from "svelte"
  import InViewSettings from "../components/InViewSettings.svelte"
  import {bezelActions, bezelActionsButtons, isDev, supportBezel, theme} from "../constants"
  import {configStore} from "../store"
  import {Remarkable} from "remarkable"
  import {bezelEventScroll} from "../utils"
  import InViewSettingsBlock from "../components/InViewSettingsBlock.svelte"

  export let options

  let containerNode
  const markdown = new Remarkable()
  let text = ""
  const md = options.path.split(".").pop().toLowerCase() === "md"

  function readFile(path) {
    return new Promise((resolve, reject) => {
      tizen.filesystem.resolve(
        path,
        function(doc) {
          doc.readAsText(resolve, reject, "UTF-8")
        },
        reject,
        "r"
      )
    })
  }

  onMount(async () => {
    if (isDev)
      text = `# Title of example md file\n\n## Subtitle is here too\n\nПривет мир\n\nКу *ку* **ку** _aaaaaaa_\n\`\`\`javascript\nlet a = 10\n\`\`\`\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"\n`
    else text = await readFile(options.path)
    if (!md) text = text.replaceAll("\n", "<br/>")
  })

  function bezelRotate(e) {
    switch ($configStore.txtAction) {
      case bezelActions.scroll: {
        bezelEventScroll(containerNode, e)
        break
      }
      case bezelActions.scale: {
        if (e.detail.direction === "CW")
          configStore.update((s) => ({
            ...s,
            txtFontSize:
              Number(s.txtFontSize) < 32
                ? Number(s.txtFontSize) + 2
                : s.txtFontSize
          }))
        if (e.detail.direction === "CCW")
          configStore.update((s) => ({
            ...s,
            txtFontSize:
              Number(s.txtFontSize) > 12
                ? Number(s.txtFontSize) - 2
                : s.txtFontSize
          }))
        break
      }
    }
  }

  const buttons = [bezelActionsButtons.scroll, bezelActionsButtons.scale]

  const buttons2 = [
    {
      id: "white",
      label: "White",
      image: "/icons/theme-white.svg"
    },
    {
      id: "black",
      label: "Black",
      image: "/icons/theme-black.svg"
    }
  ]

  let {txtTheme, txtAction} = $configStore
  $: configStore.set("txtAction", txtAction)
  $: configStore.set("txtTheme", txtTheme)
</script>

<svelte:window on:rotarydetent={bezelRotate} />
<div
  bind:this={containerNode}
  class="view"
  style="font-size: {$configStore.txtFontSize}px;
         background-color: {theme[
    txtTheme
  ].background};
         color: {theme[txtTheme].text};"
>
  {@html md ? markdown.render(text) : text}
</div>
<InViewSettings>
  {#if supportBezel}
    <InViewSettingsBlock
      bind:current={txtAction}
      {buttons}
      title="Action on bezel"
    />
    <div style="width: 1px; background-color: azure;margin: 0 5px;" />
  {/if}
  <InViewSettingsBlock
    bind:current={txtTheme}
    buttons={buttons2}
    title="Theme"
  />
</InViewSettings>

<style>
    .view {
        width: inherit;
        height: inherit;
        overflow: scroll;
        scroll-behavior: smooth;
        padding: 60px 2.0625rem;
        box-sizing: border-box;
        background: white;
        color: black;
        word-break: break-word;
        border-radius: 160px;
    }

    .view :global(img) {
        max-width: 100%;
    }
</style>
