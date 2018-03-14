/* global test expect */

const reverseInt = require('./reverse-int')

test('reverseInt function exists', () => {
  expect(typeof reverseInt).toEqual('function')
})

test('Reverse reverses a string', () => {
  expect(reverseInt(1234)).toEqual(4321)
})

test('Reverse reverses a string', () => {
  expect(reverseInt(-1234)).toEqual(-4321)
})

test('Reverse reverses a string', () => {
  expect(reverseInt(1423)).toEqual(3241)
})
