/* global tizen */
import {writable} from "svelte/store"
import {pages} from "./constants"


function createHistoryStore() {
  const history = [{pageId: pages.mainScreen, options: {}}]
  const store = writable({pageId: pages.mainScreen, options: {}})

  function goTo(pageId, options = {}) {
    // let pageData = {pageId, options: {...options, direction: "forward"}}
    let pageData = {pageId, options}
    history.push(pageData)
    store.set(pageData)
  }

  function goBack() {
    let pageData = history.pop()
    if (pageData === undefined) {
      try {
        tizen.application.getCurrentApplication().exit()
      } catch (ignore) {
      }
    }
    pageData = history[history.length - 1]
    // pageData.options = {...pageData.options, direction: "backward"}
    store.set(pageData)
  }

  window.goBack = goBack
  return {subscribe: store.subscribe, goTo, goBack}
}

function createDocStore() {
  const store = writable(undefined)

  function clear() {
    store.update(s => {
      try {
        s.destroy()
      } catch (e) {
      }
      return undefined
    })
  }

  function set(data) {
    store.update(s => {
      if (s !== undefined) {
        try {
          s.destroy()
        } catch (e) {
        }
      }
      return data
    })
  }

  return {subscribe: store.subscribe, set, clear}
}

function createConfigStore() {
  const store = writable({f: 0, lastFile: ""})

  function loadFromLocalStorage() {
    store.update(s => {
      let newData = {...s, ...localStorage}
      for (let k in newData)
        localStorage[k] = newData[k]
      return newData
    })
  }

  function set(key, value) {
    store.update(s => ({...s, [key]: value}))
    localStorage[key] = value
  }

  loadFromLocalStorage()
  return {subscribe: store.subscribe, set}
}

export const historyStore = createHistoryStore()
export const docStore = createDocStore()
export const configStore = createConfigStore()
