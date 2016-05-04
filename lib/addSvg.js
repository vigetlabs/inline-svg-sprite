module.exports = function addSvg(svg) {
  var div = document.createElement("div")
  div.innerHTML = svg
  div.setAttribute('style', 'position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; border: 0;')
  document.body.insertBefore(div, document.body.childNodes[0])
}
