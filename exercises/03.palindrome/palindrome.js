// Solution 1 # compair reverse
function palindrome (str) {
  return str === str.split('').reverse().join('')
}

// Solution 2 # every
// function palindrome (str) {
//   return str.split('').every((char, i) => char === str[str.length - i - 1])
// }

module.exports = palindrome
