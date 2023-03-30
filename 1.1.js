// Declare a subroutine
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Call the subroutine
greet("Alice");
greet("Bob");


// Declare a vector and matrix
const v = [1, 2, 3];
const m = [[1, 2], [3, 4]];

// Vector operations
const v2 = [4, 5, 6];
const vSum = v.map((val, idx) => val + v2[idx]);
const vDiff = v.map((val, idx) => val - v2[idx]);
const vScaled = v.map(val => 2 * val);
const vMagnitude = Math.sqrt(v.reduce((sum, val) => sum + val * val, 0));

// Matrix operations
const m2 = [[5, 6], [7, 8]];
const mSum = m.map((row, rowIdx) => row.map((val, colIdx) => val + m2[rowIdx][colIdx]));
const mDiff = m.map((row, rowIdx) => row.map((val, colIdx) => val - m2[rowIdx][colIdx]));
const mScaled = m.map(row => row.map(val => 3 * val));
const mProd = m.map((row, rowIdx) => v.map((val, colIdx) => row.reduce((sum, el, k) => sum + el * m2[k][colIdx], 0)));
const mDet = m[0][0] * m[1][1] - m[0][1] * m[1][0];
const mRow = m[0];
const mCol = m.map(row => row[1]);
const mVProd = m.map(row => row.reduce((sum, val, idx) => sum + val * v[idx], 0));

// Output
console.log(`v: ${v}`);
console.log(`v2: ${v2}`);
console.log(`vSum: ${vSum}`);
console.log(`vDiff: ${vDiff}`);
console.log(`vScaled: ${vScaled}`);
console.log(`vMagnitude: ${vMagnitude}`);
console.log(`m: ${m}`);
console.log(`m2: ${m2}`);
console.log(`mSum: ${mSum}`);
console.log(`mDiff: ${mDiff}`);
console.log(`mScaled: ${mScaled}`);
console.log(`mProd: ${mProd}`);
console.log(`mDet: ${mDet}`);
console.log(`mRow: ${mRow}`);
console.log(`mCol: ${mCol}`);
console.log(`mVProd: ${mVProd}`);


// Declare a variable
const x = 5;

// Conditional statement
if (x > 0) {
    console.log("x is positive");
} else if (x < 0) {
    console.log("x is negative");
} else {
    console.log("x is zero");
}



