<script>
  /* global tizen */
  import {onMount} from "svelte"

  export let options

  let containerNode
  let text = ""

  function readFile(path) {
    return new Promise((resolve, reject) => {
      tizen.filesystem.resolve(path, function(doc) {
        doc.readAsText(resolve, reject, "UTF-8")
      }, reject, "r")
    })
  }

  onMount(async () => {
    if (is_dev)
      text = `# Title of example md file\n\n## Subtitle is here too\n\nПривет мир\n\nКу *ку* **ку** _aaaaaaa_\n\`\`\`javascript\nlet a = 10\n\`\`\`\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"\n`
    else
      text = await readFile(options.path)
    text = text.replaceAll("\n", "<br/>")
  })

  function bezelRotate(e) {
    if (e.detail.direction === "CW" && containerNode.scrollHeight - containerNode.clientHeight > containerNode.scrollTop - 1) {
      containerNode.scrollTo(0, containerNode.scrollTop + 150)
    }
    if (e.detail.direction === "CCW" && containerNode.scrollTop > 150) {
      containerNode.scrollTo(0, containerNode.scrollTop - 150)
    }
  }
</script>

<svelte:window on:rotarydetent={bezelRotate} />
<div bind:this={containerNode}>
  {@html text}
</div>

<style>
    div {
        width: inherit;
        height: inherit;
        overflow: scroll;
        scroll-behavior: smooth;
        padding: 60px 2.0625rem;
        box-sizing: border-box;
        background: white;
        color: black;
        word-break: break-word;
    }

    div :global(img) {
        max-width: 100%;
    }
</style>
