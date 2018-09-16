const cv = require('opencv4nodejs')
const path = require('path')
const fs = require('fs')
const CT = require('color-thief')
const ct = new CT()
const getColors = require('get-image-colors')

module.exports = async function (url) {
 let colors = await getColors(url)
 let color = colors[0].hsl()

 this.log.send({
  event: 'hue',
  value: color[1]
 })

 this.log.send({
  event: 'saturation',
  value: color[1]
 })

 this.log.send({
  event: 'light',
  value: color[2]
 })
}
