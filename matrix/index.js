// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


// 1- create empty array of arrays called result
// 2- create a counter starting at 1
// 3- as long as (start col<=end col) AND (start row <=end row)
// 4- loop from start col to end col
// 5- at result[start row][i] assign counter variable
// 6- increment counter
// 7- increment start row
// 8- loop through start row to end row
// 9- at result[i][end col] assign counter variable
//10- increment counter
//11- decrement end col

function matrix(n) {
let result=[]
for(let i=0;i<n;i++){
    result.push([])
}
let counter=1;
let startRow=0;
let endRow=n-1;
let startColumn=0;
let endColumn=n-1;
while(startColumn<=endColumn && startRow<=endRow){
    // top row
    for(let i=startColumn;i<=endColumn;i++){
        result[startRow][i]=counter;
        counter++
    }
    startRow++;
    // right col
    for(let i=startRow;i<=endRow;i++){
        result[i][endColumn]=counter;
        counter++
    }
    endColumn--;
    // bottom row
    for(let i=endColumn;i>=startColumn;i--){
        result[endRow][i]=counter
        counter++
    }
    endRow--
    // left col
    for(let i=endRow;i>=startRow;i--){
        result[i][startColumn]=counter
        counter++
    }
    startColumn++
}
return result
}

module.exports = matrix;
