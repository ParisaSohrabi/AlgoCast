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

// '#   ' row=0, col=0
// '##  ' row=1, col=0,1
// '### ' row=2, col=0,1,2
// '####' row=3, col=0,1,2,3
function steps(n) {
 for(let row=0;row<n;row++){
  let step=''
  for(let col=0;col<n;col++){
    if(col<=row){
      step+='#'
    }else{
      step+=' '
    }
  }
       console.log(step)

 }
 
}
steps(4)
console.log(steps(4))

module.exports = steps;
