<script>
  import List from "../components/List.svelte"
  import {configStore, historyStore} from "../store"
  import {pages} from "../constants"

  let pagesList = [
    {title: "Open", subtitle: "Open a load file", pageId: pages.filesList},
    // {title: "Settings", subtitle: "Bezel action", pageId: pages.settings},
    {title: "Help", subtitle: "App description", pageId: pages.help}]
  if ($configStore.lastFile) {
    pagesList = [{
      title: "Last file", subtitle: $configStore.lastFile, pageId: pages.openLastFile
    }, ...pagesList]
  }

  function click(e) {
    const pageId = e.detail.pageId
    historyStore.goTo(pageId)
  }
</script>

<List height={360} items={pagesList} on:click={click} title="PDFview" />
