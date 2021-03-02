function _merge(arr, l, mid, r) {
    const aux = arr.slice(l, r+1);
    let i = l, j = mid + 1;
    for(let k = l; k <= r; k++) {
        if(i > mid) {
            arr[k] = aux[j - l];
            j += 1;
        } else if (j > r) {
            arr[k] = aux[i - l];
            i += 1;
        } else if (aux[i - l] < aux[j - l]) {
            arr[k] = aux[i - l];
            i += 1;
        } else {
            arr[k] = aux[j - l];
            j += 1;
        }
    }
}

function _mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    let mid = Math.floor(l + (r - l)/2);
    _mergeSort(arr, l, mid);
    _mergeSort(arr, mid+1, r);
    _merge(arr, l, mid, r);
}

function mergeSort(arr) {
    _mergeSort(arr, 0, arr.length-1);
    return arr;
}
console.log(mergeSort([1, 5, 2, 8, 3, 4]));