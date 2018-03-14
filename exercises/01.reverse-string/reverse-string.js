// Solution 1 # chains native function
function reverse (str) {
  return str.split('').reverse().join('')
}

// Solution 2 # for of
// function reverse (str) {
//   let reversed = ''
//   for (let chareacter of str) {
//     reversed = chareacter + reversed
//   }
//   return reversed
// }

// Solution 3 # reduce
// function reverse (str) {
//   return str.split('').reduce((reversed, chareacter) => chareacter + reversed, '')
// }

// Solution 4 # for
// function reverse (str) {
//   let reversed = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i]
//   }
//   return reversed
// }

module.exports = reverse
