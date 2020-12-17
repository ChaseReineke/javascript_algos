//1.
for (var i = 0; i < 256; i++) {
    console.log(i);
}

//2.
sum = 0;
for (var i = 0; i < 1001; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log(sum);

//3.
sum = 0;
for (var i = 0; i < 5001; i++) {
    if (i % 2 == 1) {
        sum = sum + i;
    }
}
console.log(sum);

//4.
function sumArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumArr([2, 3, 5]));
console.log(sumArr([-2, 6, 12, 1]));

//5.
function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([-2, 5, 8, -4]));
console.log(findMax([7, 3, 1, -9]));

//6.
function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

console.log(findAvg([3, 5, 6]));
console.log(findAvg([7, -1, 44, 20, 9]));

//7.
function arrOdd(arr) {
    newArr = []
    for (var i = 0; i < 51; i++) {
        if (i % 2 == 1) {
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(arrOdd());

//8.
function greaterThanY(arr) {
    y = 3;
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            sum = sum + 1;
        }
    }
    return sum;
}

console.log(greaterThanY([2, 1, 4]));
console.log(greaterThanY([-4, 19, 3, 8, 6]));

//9.
function square(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

console.log(square([2, 4, -8]));
console.log(square([-3, 1, 0, 5]));

//10.
function noNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(noNeg([1, -6, 5, 0]));
console.log(noNeg([3, 9, -3, -2]));

//11.
function minMaxAvg(arr) {
    var newArr = [];
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    newArr.push(min, max, avg);
    return newArr;
}

console.log(minMaxAvg([2, 3, 4, 5]));
console.log(minMaxAvg([11, 0, 9, 5]));

//12.
function swapVal(arr) {
    var x = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = x;
    return arr;
}

console.log(swapVal([2, 4, 5, 6]));
console.log(swapVal([1, 7, 2, 0]));

//13.
function numToStr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(numToStr([0, -4, 2, -3]));
console.log(numToStr([-1, 22, -1, 6]));
