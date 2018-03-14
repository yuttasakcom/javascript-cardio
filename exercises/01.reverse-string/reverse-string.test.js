/* global test expect */

const reverse = require('./reverse-string')

test('Reverse function is defined', () => {
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
