/* global test expect */
const palindrome = require('./palindrome')

test('palindrome function exists', () => {
  expect(typeof palindrome).toEqual('function')
})

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy()
})

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy()
})

test('"greeting" is not a palindrome', () => {
  expect(palindrome('greeting')).toBeFalsy()
})

test('"1000000001" is a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy()
})

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy()
})

test('"pennep" is a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy()
})
