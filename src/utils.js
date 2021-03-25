export function scrollTo(node, x, y) {
  if (node.scrollTo)
    node.scrollTo(x, y)
  else {
    node.scrollTop = y
    node.scrollLeft = x
  }
}
