/* global test expect */
const palindrome = require('./palindrome')

test('Palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function')
})
