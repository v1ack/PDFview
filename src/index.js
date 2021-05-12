import App from "./App.svelte"

let loading = document.getElementById("loading-node")
loading.parentNode.removeChild(loading)

const app = new App({
  target: document.body,
})

export default app
