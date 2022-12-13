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

// iterate through row s(from 0 to n)
// create an empty string, "stair"
// iterate through columns (from 0 to n)
// if the current column is equal to or less than the current row
// add a '#' to stair
// else add a space to the 'stair'
// console.log 'stair'

// row=0 , col=0 => #
// row=0 , col=1 => _
// row=2 , col=2 => #
// row=2 , col=3 => _
function steps(n) {
   for(let row=0;row<n;row++){
    let level='';
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
