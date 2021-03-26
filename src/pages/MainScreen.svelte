<script>
  import List from "../components/List.svelte"
  import {configStore, historyStore} from "../store"
  import {pages} from "../constants"
  import {getViewPageId} from "../utils"

  let pagesList = [
    {title: "Open", subtitle: "Open a load file", pageId: pages.filesList},
    // {title: "Settings", subtitle: "Bezel action", pageId: pages.settings},
    {title: "Help", subtitle: "App description", pageId: pages.help}]
  if ($configStore.lastFile) {
    let path = $configStore.lastFile
    let filename = path.split("/")
    filename = filename[filename.length - 1]
    pagesList = [{
      title: "Last file",
      subtitle: filename,
      pageId: getViewPageId(path),
      options: {path}
    }, ...pagesList]
  }

  function click(e) {
    const pageId = e.detail.pageId
    const options = e.detail.options
    historyStore.goTo(pageId, options)
  }
</script>

<List height={360} items={pagesList} on:click={click} title="PDFview" />
