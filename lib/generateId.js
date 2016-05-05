module.exports = function(filePath) {
  return 'inline-svg-sprite--' + filePath.match(/.*?\/.*\/(.*)\.svg/)[1]
}
