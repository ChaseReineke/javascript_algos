function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    // your code here
    console.log("Array: " + arr);
    let pivotIndex = Math.ceil(Math.random() * (endIdx));
    console.log("starting Pivot Index: " + pivotIndex);
    let pivot = arr[pivotIndex];
    while(startIdx < endIdx){
        while(arr[startIdx] < pivot){
            startIdx++; 
        }
        while(arr[endIdx] > pivot){
            endIdx--;
        }
        if (startIdx < endIdx){
            let temp = arr[startIdx];
            arr[startIdx] = arr[endIdx];
            arr[endIdx] = temp;
        }
    }
    console.log("final Pivot Index: " + startIdx);
    console.log("Array: " + arr);
    console.log("-----------------------------------")
    return startIdx;
}

function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
  // your code here
    if(startIdx < endIdx){
        const pi_idx = arrayPartition(arr);
        quickSort(arr, startIdx, pi_idx-1);
        quickSort(arr, pi_idx+1, endIdx);
    }
    return arr;
}

console.log(quickSort([1, 5, 2, 8, 3, 4]));