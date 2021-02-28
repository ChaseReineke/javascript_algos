function findConsecutiveSums(arr, sum) {
    let idx=0, newArr = [], temparr=[], temp = 0;
    while(idx < arr.length){
        for(let i = idx; i < arr.length; i++) {
            temp += arr[i];
            // create temparr
            temparr.push(arr[i]);
            if(temp === sum){
            let zeroidx = i;
            while(zeroidx < arr.length-1) {
                if(arr[zeroidx+1] === 0){
                temparr.push(arr[zeroidx+1]);
                }
                zeroidx += 1;
            }
            newArr.push(temparr);
            idx += 1;
            temparr = [];
            temp = 0;
            break;
            } else if (temp > sum) {
                temparr = [];
                temp = 0;
                idx += 1;
                break;
            }
        }
        idx += 1;
    }
    return newArr;
    
}

console.log(findConsecutiveSums([2, 5, 3, 6, 5, 2, 3,6,7, 23, 12, 0, 0, 0, 0, 0], 16));