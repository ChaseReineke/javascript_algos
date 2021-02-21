function shift_values(arr){
    for (let i = 0; i < arr.length; i++){
        if (i === arr.length - 1){
            arr[i] = 0;
        }
        else{
            arr[i] = arr[i + 1];
        }
    }
    return arr;
}
console.log(shift_values([1,5,2,10,-3]));