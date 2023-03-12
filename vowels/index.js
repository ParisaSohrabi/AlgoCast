// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// define an array and asign it with vowels character
// define counter
// loop through the string and check each character with that array
// if current char equall to one of the vowels then counter++
// return counter
function vowels(str) {
let counter=0
const checker=['a','e','i','o','u']
for(let char of str.toLowerCase()){
  if(checker.includes(char)){
    counter++
  }
}
return counter
}
vowels('Hi There!')
console.log(vowels('Hi There!'))
module.exports = vowels;

