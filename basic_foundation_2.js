//1.
function makeBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeBig([2, -1, 8, -6]));
console.log(makeBig([0, -3, 3, 3]));

//2.
function lowHigh(arr) {
    min = arr[0];
    max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}
max = lowHigh([2, 1, 7, -3]);
console.log(max);

//3.
function printReturn(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}
console.log(printReturn([2, 4, -6, 3, 8, 9]));

//4.
function double(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}
console.log(double([4, 8, 5, -2]));

//5.
function countPos(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + 1;
        }
    }
    arr[arr.length - 1] = sum;
    return arr;
}
console.log(countPos([-1, -3, 6, 5, 4]));

//6.
function evenOdd(arr) {
    var negSum = 0;
    var posSum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negSum = negSum + 1;
            posSum = 0;
            if (negSum == 3) {
                console.log("That's odd!");
            }
        }
        if (arr[i] > 0) {
            posSum = posSum + 1;
            negSum = 0;
            if (posSum == 3) {
                console.log("Even more so!");
            }
        }
    }
}
evenOdd([2, -1, -4, -5, 2, -4, -5, -1, 1, -1, 1, 2, 3]);

//7.
function incSec(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i] = arr[i] + 1;
        }
    }
    return arr;
}
console.log(incSec([2, 3, 4, 5, 6, 7]));

//8.
function prevLength(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}
console.log(prevLength(["Dog", "Brick", "Sand", "Kitten", "Motorcycle", "Quilt"]));

//9.
function addSeven(arr) {
    newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    console.log(arr);
    return newArr
}
console.log(addSeven([1, 2, 3, 4]));

//10.
function reverse(arr) {
    arr.reverse();
    return arr;
}
console.log(reverse([1, 2, 3, 4, 5, 6]));

//11.
function newNeg(arr) {
    newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i] * -1);
        } else {
            newArr.push(arr[i]);
        }
    }
    console.log(arr);
    return newArr
}
console.log(newNeg([-7, 8, 5, 4]));

//12.
function hungry(arr) {
    food = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            console.log("yummy");
            sum = sum + 1;
        }
    }
    if (sum == 0) {
        console.log("I'm Hungry")
    }
}
hungry([1, 1, 1, 1]);
hungry([0, 1, 0, 1, 0]);

//13.
function swapTowCen(arr) {
    var temp;
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    //
    temp = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp;
    return arr;
}
console.log(swapTowCen([1, 2, 3, 4, 5, 6, 7, 8]));

//14.
function scale(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(scale([1, 3, 5, 6], 4));
