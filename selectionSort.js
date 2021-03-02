function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
    let minIndex = i, temp;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
            minIndex = j;
            }
        }
        if(minIndex != i) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([1, 5, 2, 8, 3, 4]));