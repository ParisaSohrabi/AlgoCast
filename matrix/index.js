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
const results=[];
for(let i=0;i<n;i++){
    results.push([])
}
let counter=1;
let startRow=0;
let endRow=n-1;
let startCol=0;
let endCol=n-1;
while(startCol<=endCol && startRow<=endRow){
    // top row
    for(let i=startCol;i<=endCol;i++){
        results[startRow][i]=counter;
        counter++
    }
    startRow++;
    // right col
    for(let i=startRow;i<=endRow;i++){
results[i][endCol]=counter
counter++;
    }
    endCol--;
    // bottom row
    for(let i=endCol;i>=startCol;i--){
        results[endRow][i]=counter;
        counter++;
    }
    endRow--;
    // left col
    for(let i=endRow;i>=startRow;i--){
        results[i][startCol]=counter
        counter++
    }
    startCol++
}
return results
}

module.exports = matrix;
