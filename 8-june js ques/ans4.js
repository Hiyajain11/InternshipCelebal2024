// 4.  Write a JavaScript program to find the largest of three given integers.

// testcase: [[1,3,'a'], [4,2,9] ,[32,37,23] ,[3,4,10], [-10,0,23]]

function findLargestOfThree(a, b, c) {
    
    if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
        return Math.max(a, b, c);
    } else {
        return "Invalid input, all values must be integers.";
    }
}

// Test cases
const testCases = [
    [1, 3, 'a'],
    [4, 2, 9],
    [32, 37, 23],
    [3, 4, 10],
    [-10, 0, 23]
];

testCases.forEach((testCase) => {
    console.log(`The largest of [${testCase}] is: ${findLargestOfThree(...testCase)}`);
});
