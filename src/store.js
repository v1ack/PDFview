/* global tizen */
import {writable} from "svelte/store"
import {defaultConfigValues, defaultPage} from "./constants"

function createHistoryStore() {
  const history = [defaultPage]
  const store = writable(defaultPage)

  function goTo(pageId, options = {}) {
    // let pageData = {pageId, options: {...options, direction: "forward"}}
    let pageData = {pageId, options}
    history.push(pageData)
    store.set(pageData)
  }

  function goBack() {
    history.pop()
    let pageData = history[history.length - 1]
    if (pageData === undefined) {
      try {
        tizen.application.getCurrentApplication().exit()
      } catch (ignore) {
        pageData = defaultPage
      }
    }
    // pageData.options = {...pageData.options, direction: "backward"}
    store.set(pageData)
  }

  return {subscribe: store.subscribe, goTo, goBack}
}

function createDocStore() {
  const store = writable(undefined)

  function clear() {
    store.update((s) => {
      try {
        s.destroy()
      } catch (e) {}
      return undefined
    })
  }

  function set(data) {
    store.update((s) => {
      if (s !== undefined) {
        try {
          s.destroy()
        } catch (e) {}
      }
      return data
    })
  }

  return {subscribe: store.subscribe, set, clear}
}

function createConfigStore() {
  const store = writable(defaultConfigValues)

  function loadFromLocalStorage() {
    store.update((s) => {
      let newData = {...s, ...localStorage}
      for (let k in newData) localStorage[k] = newData[k]
      return newData
    })
  }

  function set(key, value) {
    store.update((s) => ({...s, [key]: value}))
    localStorage[key] = value
  }

  function update(updater) {
    store.update((prev) => {
      let newData = updater(prev)
      for (let k in newData) localStorage[k] = newData[k]
      return newData
    })
  }

  loadFromLocalStorage()
  return {subscribe: store.subscribe, set, update}
}

export const historyStore = createHistoryStore()
export const docStore = createDocStore()
export const configStore = createConfigStore()
