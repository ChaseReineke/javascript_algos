function allNonConsecutive(arr) {
        let newarr = [];
        for(let i=0;i<arr.length-1;i++){
            if(arr[i+1] !== arr[i]+1){
                newarr.push({
                    i : i+1,
                    n : arr[i+1]
                })
            }
        }
        return newarr;
    }
    
    console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));