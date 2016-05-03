module.exports = function addSvg(svg) {
  var div = document.createElement("div")
  div.innerHTML = svg
  div.setAttribute('style', 'position: absolute; visiblity: hidden;')
  document.body.insertBefore(div, document.body.childNodes[0])
}