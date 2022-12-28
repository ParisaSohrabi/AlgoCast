// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
let charMap={}
let max=0;
let result=''
for(let char of str){
  charMap[char]= charMap[char]+1 || 1;
  // return charMap;
}
for(let char in charMap){
  if(charMap[char]>max){
    max=charMap[char];
result=char;
  } 
}
return result
}
maxChar("abcccccccd")
console.log( maxChar("abcccccccd"))
module.exports = maxChar;

