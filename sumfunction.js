//Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

var arr = [1, 2, 3, 4, 5];

function sumArr(arr) {
    var sum = 0;
    for (i of arr) {

        sum = sum + i;
        console.log(i, sum)

    }
    return sum;
}
console.log(sumArr(arr));   