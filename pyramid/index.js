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


function pyramid(n) {
  for(let row=0;row<n;row++){
    let step=''
    const middle=Math.floor((2*n-1)/2)
    for(let col=0;col<(2*n-1);col++){
      if(middle-row<=col && middle+row>=col){
        step+='#'
      }else{
        step+=' '
      }
    }
    console.log(step)
  }
}
pyramid(4)
module.exports = pyramid;
