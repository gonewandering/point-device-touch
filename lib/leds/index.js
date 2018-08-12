const matrix = require('node-sense-hat').Leds
const shapes = require('./shapes')
const config = require('../../config')
const statuses = require('./status')
const cnf = {
  shape: 'blank'
}

function mapPixels(matrix) {
  return matrix.map(d => {
    return config.colors[d]
  })
}

function update() {
  let rgb = mapPixels(shapes[cnf.shape])
  rgb = addStatus(rgb)
  return matrix.setPixels(rgb)
}

function addStatus(rgb) {
  for (var s in statuses) {
    if (statuses[s].on === true) {
      rgb[s] = statuses[s].color
    }
  }

  return rgb
}

function setStatus(status, on) {
  statuses.forEach((s, i) => {
    if (s.status == status) {
      statuses[i].on = on
    }
  })

  update()
}

function setShape(shape) {
  cnf.shape = shape
  update()
}

function clearShape() {
  return setShape('blank')
}

module.exports = {
  set: setShape,
  clear: clearShape,
  status: setStatus
}