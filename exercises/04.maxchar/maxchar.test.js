/* global test expect */

const maxchar = require('./maxchar')

test.only('maxchar function exists', () => {
  expect(typeof maxchar).toEqual('function')
})
