module.exports = function updateHrefs(iconSelector) {
  var icons = document.querySelectorAll(`${iconSelector} use`)
  
  for (var i = 0; i < icons.length; i++) {
    var icon = icons[i]
    var href = icon.getAttribute('xlink:href')
    var id = href.replace(/.*#/, '#')
    
    icon.setAttribute('xlink:href', id)
  }
}