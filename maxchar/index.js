// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
let mapChar={}
let max=0
let result=''
for(let char of str){
  mapChar[char]= 1 || mapChar[char]+1 
}
for(let char in mapChar){
  if(mapChar[char]>max){
    max=mapChar[char]
    result=char
  }
}

return result
}
maxChar("apple 1231111")
console.log( maxChar("apple 1231111"))
module.exports = maxChar;

