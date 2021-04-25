import {pages} from "./constants"

export function scrollTo(node, x, y) {
  if (node.scrollTo)
    node.scrollTo(x, y)
  else {
    node.scrollTop = y
    node.scrollLeft = x
  }
}

export function bezelEventScroll(node, event) {
  if (event.detail.direction === "CW" && node.scrollHeight - node.clientHeight > node.scrollTop - 1)
    scrollTo(node, 0, node.scrollTop + 150)
  if (event.detail.direction === "CCW" && node.scrollTop > 0)
    scrollTo(node, 0, node.scrollTop - 150)
}

export function getViewPageId(path) {
  let extension = path.toLowerCase().split(".")
  extension = extension[extension.length - 1]
  switch (extension) {
    case "pdf": {
      return pages.pdfPreview
    }
    case "md": {
      return pages.txtView
    }
    case "txt": {
      return pages.txtView
    }
  }
}