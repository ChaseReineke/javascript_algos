//1.
function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sigma(5));
console.log(sigma(8));

//2.
function factorial(num) {
    var sum = 1;
    for (var i = 1; i <= num; i++) {
        sum = sum * i;
    }
    return sum;
}
console.log(factorial(5));
console.log(factorial(8));

//3. 
function fibonacci(num) {
    var arr = [0, 1];
    for (var i = 2; i < num + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[num]
}
console.log(fib(5));
console.log(fib(8));

//4.
function secondLast(arr) {
    if (arr.length < 2) {
        return null;
    } else {
        return arr[arr.length - 2];
    }
}
console.log(secondLast([1, 2, 3, 4, 5, 6]));
console.log(secondLast([1]));

//5.
function nLast(arr, num) {
    if (arr.length < num) {
        return null;
    } else {
        return arr[arr.length - num];
    }
}
console.log(nLast([1, 2, 3, 4, 5, 6], 4));
console.log(nLast([1, 2, 3], 4));

//6.
function secMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    max = arr.indexOf(max)
    arr.splice(max, 1);
    var secmax = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > secmax) {
            secmax = arr[i];
        }
    }
    return secmax;
}
console.log(secMax([5, 4, 3, 2, 1]));
console.log(secMax([5, 6, 7, 3, 8]));
console.log(secMax([5, 6, 3, 2, 1]));
console.log(secMax([6, 2, 3, 2, 1]));
console.log(secMax([5, 6, 7, 10, 12]));

//7.
function doubleUp(arr) {
    for (var i = arr.length-1; i >= 0; i --) {
        arr.splice(i, 0, arr[i]);
    }
    return arr;
}
console.log(doubleUp([1, 2, 3]));
console.log(doubleUp(["A", "B", "C"]));