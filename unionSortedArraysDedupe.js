function unionSortedArraysDedupe(arr1, arr2) {
    let result = [];
    let p1 = 0;
    let p2 = 0;
    
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            if ( arr1[p1] !== result[result.length-1]) {
                result.push(arr1[p1]);
            } 
            p1++;
            p2++;  
        } else if (arr1[p1] < arr2[p2] ) {
            if ( arr1[p1] !== result[result.length-1]) {
                result.push(arr1[p1]);
            } 
            p1++; 
        } else if (arr1[p1] > arr2[p2] ) {
            if ( arr2[p2] !== result[result.length-1]) {
                result.push(arr2[p2]);
            } 
            p2++;  
        }
    }
    while(p1 < arr1.length) {
        if ( arr1[p1] !== result[result.length-1]) {
            result.push(arr1[p1]);
            } 
            p1++;
    }
    while(p2 < arr2.length) {
        if ( arr2[p2] !== result[result.length-1]) {
            console.log(result[result.length-1]);
            result.push(arr2[p2]);
            } 
            p2++;  
    }
        return result;
}

console.log(unionSortedArraysDedupe([1, 2, 2, 3, 3, 3, 10, 13], [2, 3, 3, 5, 5, 7, 8]));