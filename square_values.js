function square_values(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    console.log(arr);
}
square_values([2,-4,5,8]);