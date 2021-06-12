/* square(num1) + square(num2)
square(sum)*/

function squareSum1 (num1, num2) {
    const sqNum1 = num1 * num1;
    const sqNum2 = num2 * num2;
    const addSquares = sqNum1 + sqNum2;
    const sqSum = addSquares * addSquares;
    console.log(sqSum);;
}
squareSum1(3,4);

const squareSum2 = function(num1, num2) {
    const sqNum1 = num1 * num1;
    const sqNum2 = num2 * num2;
    const addSquares = sqNum1 + sqNum2;
    const sqSum = addSquares * addSquares;
    console.log(sqSum);
};
squareSum2(3,4);

const squareSum3 = (num1, num2) => {
    const sqNum1 = num1 * num1;
    const sqNum2 = num2 * num2;
    const addSquares = sqNum1 + sqNum2;
    const sqSum = addSquares * addSquares;
    console.log(sqSum);;
};
squareSum3(3,4);

