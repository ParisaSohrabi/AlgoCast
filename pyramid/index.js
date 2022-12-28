// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// pyramid(4) ---#--- row=0, col=3
//            --###-- row=1,col=2,3,4
//            -#####- row=2,col=1,2,3,4,5
//            ####### row=3,col=0,1,2,3,4,5,6
// row start from 0 to N
// make a new level
// col start from 0 to N*2-1
// find out the middlepoint
// print the #

function pyramid(n) {
  const middlepoint= Math.floor((n*2-1)/2)
  for(let row=0;row<n;row++){
    let level=''
    for(let col=0;col<n*2-1;col++){
      if(middlepoint-row<=col && middlepoint+row>=col){
        level+='#'
      }else{
        level+=' '
      }
    }
    console.log(level)
  }
}

module.exports = pyramid;
