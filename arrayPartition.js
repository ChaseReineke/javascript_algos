function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    // your code here
    let pivotIndex = Math.ceil(Math.random() * (endIdx - startIdx) + startIdx);
    //Math.floor(Math.random() * (1 + High - Low)) + Low
    let pivot = arr[pivotIndex];
    //[1, 5, 8, 4, 2, 6]
    //[]
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
    return startIdx;

}

const arr = [1, 5, 8, 4, 2, 6]
console.log("Pivot Value: " + arrayPartition(arr));
console.log(arr);