function combineSortedArrays(arr1, arr2) {
    let arr = [], i = j = 0, len1 = arr1.length, len2 = arr2.length;
    for (let k = 0; k < len1+len2; k++) {
        if (i > len1-1) {
            arr[k] = arr2[j];
            j += 1;
        }
        else if (j > len2-1) {
            arr[k] = arr1[i];
            i += 1;
        }
        else if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i]; 
            i += 1;
        }
        else {
            arr[k] = arr2[j];
            j += 1;
        }
    }
    return arr;
}

console.log(combineSortedArrays([2, 4, 6], [1, 3, 5]));
  // should log [1, 2, 3, 4, 5, 6]
console.log(combineSortedArrays([1], [3])); // should log [1, 3]
console.log(combineSortedArrays([1], [])); // should log [1]