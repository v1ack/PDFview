<script>
  /* global tizen */
  import {configStore, historyStore} from "../store"
  import {isDev, pages} from "../constants"
  import Loader from "../components/Loader.svelte"
  import {fade} from "svelte/transition"
  import List from "../components/List.svelte"
  import Button from "../components/Button.svelte"
  import {getViewPageId} from "../utils"

  let chosenFileIndex = 0
  let files = []

  const defaultDir = "documents"
  const types = ["pdf", "md", "txt"]

  function onError(error) {
    console.log("Error", error)
  }

  function humanFileSize(bytes, si = false) {
    let thresh = si ? 1000 : 1024
    if (Math.abs(bytes) < thresh) {
      return bytes + " B"
    }
    let units = si ? ["kB", "MB", "GB"] : ["KiB", "MiB", "GiB"],
      u = -1
    do {
      bytes /= thresh
      ++u
    } while (Math.abs(bytes) >= thresh && u < units.length - 1)
    return bytes.toFixed(1) + " " + units[u]
  }

  function loadFiles() {
    if (isDev)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let filesList = [
            {
              title: "Course work",
              path: "coursework.pdf",
              modified: "dsf",
              subtitle: humanFileSize(23423523, false),
            },
            {
              title:
                "A strange file with a too long name and o dont know how it can be that",
              path: "coursework.txt",
              modified: "dsf",
              subtitle: humanFileSize(8949353, false),
            },
            {
              title: "Markdown file",
              path: "coursework.md",
              modified: "dsf",
              subtitle: humanFileSize(2432, false),
            },
          ]
          files = filesList
          resolve(filesList)
        }, 500)
      })

    return new Promise((resolve, reject) => {
      tizen.filesystem.resolve(
        defaultDir,
        (dir) => {
          dir.listFiles((list) => {
            let filesList = []
            for (let f of list) {
              if (types.indexOf(f.name.split(".").pop().toLowerCase()) > -1) {
                filesList.push({
                  title: f.name,
                  path: f.fullPath,
                  modified: f.modified,
                  subtitle: humanFileSize(f.fileSize, false),
                })
              }
            }
            files = filesList
            resolve(filesList)
          }, reject)
        },
        reject,
        "r"
      )
    })
  }

  function click(e) {
    const path = e.detail.path
    let process = true
    configStore.update((prev) => {
      if (app_type === "demo") {
        let openedFiles = JSON.parse(prev.files)
        if (openedFiles.indexOf(path) > -1 || openedFiles.length < 3) {
          if (openedFiles.indexOf(path) === -1) openedFiles.push(path)
        } else process = false
        return {...prev, lastFile: path, files: JSON.stringify(openedFiles)}
      } else return {...prev, lastFile: path}
    })
    if (process) {
      historyStore.goTo(getViewPageId(path), {path})
    } else
      historyStore.goTo(pages.message, {
        message: "You reach the limit of the demo version",
      })
  }

  function deleteFile() {
    let file = files[chosenFileIndex].path
    let delete_ = confirm("Are you shure to delete " + file + "?")
    if (delete_) {
      tizen.filesystem.resolve("documents", (dir) => dir.deleteFile(file))
      loadFiles()
    }
  }
</script>

{#await loadFiles()}
  <div class="loader" transition:fade>
    <Loader color="rgb(20, 182, 255)" />
    <p>Loading</p>
  </div>
{:then files_}
  {#if files.length}
    <List
      items={files}
      title="Open file"
      on:click={click}
      bind:chosen={chosenFileIndex}
    />
    <button class="trash" on:click={deleteFile}>🗑</button>
  {:else}
    <div class="loader" transition:fade>
      <p>No files found</p>
      <Button on:click={() => historyStore.goTo(pages.help)}>Open help</Button>
    </div>
  {/if}
{:catch e}
  <p class="center">Error {e.message}</p>
{/await}

<style>
  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .loader p {
    font-size: 1.4em;
    margin-top: 0;
    text-align: center;
  }

  .trash {
    position: absolute;
    top: 50%;
    right: 0;
    background: none;
    color: white;
    border: none;
    font-size: 2.3em;
    transform: translateY(-50%);
  }
</style>
