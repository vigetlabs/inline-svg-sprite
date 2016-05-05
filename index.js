var addSvg      = require('./lib/addSvg')
var updateHrefs = require('./lib/updateHrefs')
var generateId  = require('./lib/generateId')

module.exports = function inlineSvgSprite(iconPath, iconSelector) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", iconPath, true)
  xhr.send()
  xhr.onload = function() {
    if(xhr.status === 200) {
      addSvg(xhr.responseText, generateId(iconPath))
      updateHrefs(iconSelector || 'svg.icon')
    }
  }
}
