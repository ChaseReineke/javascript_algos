function multiKeySort(arr, keys) {
    let key = keys[0];
    let key2 = keys[1];
    for ( let i = 1; i < arr.length; i++) {
        let idx = i;
    
        while(idx > 0 &&(arr[idx][key] < arr[idx - 1][key] || (arr[idx][key]===arr[idx-1][key]&&arr[idx][key2] < arr[idx-1][key2])))  {
            let temp = arr[idx];
            arr[idx] = arr[idx - 1];
            arr[idx - 1] = temp;
            idx--;
        }
    }
    
    return arr;
}

console.log(multiKeySort([
    {
        firstName: 'Lee',
        lastName: 'Babba'
    },
    {
        firstName: 'Lee',
        lastName: 'Abba'
    },
    {
        firstName: 'Adam',
        lastName: 'Smith'
    }
], ['firstName', 'lastName']));