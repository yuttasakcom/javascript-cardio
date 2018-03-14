/* global test expect */

const reverse = require('./reverse-string')

test('reverse function exists', () => {
  expect(typeof reverse).toEqual('function')
})

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reverse(' abcd')).toEqual('dcba ')
})

test('Reverse reverses a string', () => {
  expect(reverse(' abcd ')).toEqual(' dcba ')
})
