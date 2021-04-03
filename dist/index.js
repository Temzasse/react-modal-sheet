
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-modal-sheet.cjs.production.min.js')
} else {
  module.exports = require('./react-modal-sheet.cjs.development.js')
}
