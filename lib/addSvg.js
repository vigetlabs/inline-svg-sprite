module.exports = function addSvg(svg, id) {

  if(document.getElementById(id)) return

  var div = document.createElement("div")
  div.setAttribute('id', id)
  div.setAttribute('style', 'position: absolute; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; border: 0;')
  div.innerHTML = svg
  document.body.insertBefore(div, document.body.childNodes[0])
}
