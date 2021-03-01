function intersectSortedArraysDedupe (arr1, arr2){
    newArray = [];
    p1 = 0;
    p2 = 0;
    while (arr1[p1] !== undefined && arr2[p2] !== undefined) {
        if (arr1[p1] == arr2[p2] && arr1[p1] !== newArray[newArray.length-1]) {
            newArray.push(arr1[p1]);
            p1++;
            p2++;
        } else if (arr1[p1] > arr2[p2]) {
            p2++;
        } else {
            p1++;
        }
    }
    return newArray;
}