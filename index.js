var addSvg      = require('./lib/addSvg')
var updateHrefs = require('./lib/updateHrefs')

module.exports = function inlineSvgSprite(iconPath, iconSelector) {
  var ajax = new XMLHttpRequest()
  ajax.open("GET", iconPath, true)
  ajax.send()
  ajax.onload = function(e) {
    addSvg(ajax.responseText)
    updateHrefs(iconSelector || 'svg.icon')
  }
}

