function evenNumbers(arr) {
    let arr1 = []
    for (element of arr) {
        if (element % 2 == 0) {
            arr1.push(element)
        }
    }
    return arr1
}
var x = evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(x)


// 

function maxNumbers(arr) {
    var max = -1e9
    for (element of arr) {
        if (element > max) {
            max = element
        }
    }
    return max
}
var x = maxNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 180, 1, 22, 85495, 1, 3, 2, 4, 5])
console.log(x)

//

function reverseString(s) {
    return s.split("").reverse().join("")
}
var s = reverseString("hello beso")
console.log(s)

//

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let numbers = [1, 2, 3, 4, 2, 5, 1, 5, 7, 8, 9, 5, 2, 11, 4, 6, 3, 1, 1, 1, 1];
let uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers);
