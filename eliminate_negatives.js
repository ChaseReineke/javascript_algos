function eliminate_negatives(arr){
    for (let i =0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return (arr);
}
console.log(eliminate_negatives([3,-2,-6,12,15]));