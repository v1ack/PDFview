import {pages} from "./constants"

export function scrollTo(node, x, y) {
  if (node.scrollTo)
    node.scrollTo(x, y)
  else {
    node.scrollTop = y
    node.scrollLeft = x
  }
}

export function getViewPageId(path) {
  let extension = path.toLowerCase().split(".")
  extension = extension[extension.length - 1]
  switch (extension) {
    case "pdf": {
      return pages.pdfPreview
    }
    case "md": {
      return pages.mdView
    }
    case "txt": {
      return pages.txtView
    }
  }
}
