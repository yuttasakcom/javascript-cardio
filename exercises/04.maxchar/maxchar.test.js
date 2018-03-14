/* global test expect */

const maxchar = require('./maxchar')

test('maxchar function exists', () => {
  expect(typeof maxchar).toEqual('function')
})

test('Finds the most frequently used char', () => {
  expect(maxchar('a')).toEqual('a')
  expect(maxchar('abcdefghijklmnaaaaa')).toEqual('a')
})

test('Works with numbers in the string', () => {
  expect(maxchar('ab1c1d1e1f1g1')).toEqual('1')
})

test('"abcccccccd" maxchar is c', () => {
  expect(maxchar('abcccccccd')).toEqual('c')
})
