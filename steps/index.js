// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// row=0,col=0 #
// row=0,col=1 ' '
// row=1,col=0 #
// row=1,col=1 #
// row=1,col=2 ' '

function steps(n) {
 
 for(let row=0;row<n;row++){
  let level=""
  for(let col=0;col<n;col++){
    if(col<=row){
      level+="#"
    }else{
      level+=' '
    }
  }
  console.log(level)
 }
}
steps(4)
console.log(steps(4))

module.exports = steps;
