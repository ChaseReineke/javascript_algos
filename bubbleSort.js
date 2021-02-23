function bubbleSort(arr) {
    let swapped = true;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped);
    return arr;
}

console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
console.log(bubbleSort([10, 8, 9, 3, 6, 2]));