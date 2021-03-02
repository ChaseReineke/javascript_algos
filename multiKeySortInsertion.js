function multiKeySortInsertion(arr, keys) {
    for(let i = 1; i < arr.length; i++) {
        const elem = arr[i];
    
        for(let j = i - 1; j >= 0 && compareByKeys(elem, arr[j], keys) < 0; j--) {
            arr[j + 1] = arr[j];
        }
    
        if(j !== i - 1) {
            arr[j + 1] = elem;
        }
    }

    return arr;
}