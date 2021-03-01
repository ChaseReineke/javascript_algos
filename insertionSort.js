function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        let j = i - 1;
        while(j >= 0 && temp < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

let arr = [6,8,9,-2,8,4,5,1,0];
console.log("result: " + (insertionSort(arr)));