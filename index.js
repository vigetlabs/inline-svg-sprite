var addSvg      = require('./lib/addSvg')
var updateHrefs = require('./lib/updateHrefs')

module.exports = function inlineSvgSprite(iconPath, iconSelector) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", iconPath, true)
  xhr.send()
  xhr.onload = function() {
    if(xhr.status === 200) {
      addSvg(xhr.responseText)
      updateHrefs(iconSelector || 'svg.icon')
    }
  }
}
