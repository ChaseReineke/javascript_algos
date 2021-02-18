function number_to_string(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Negative";
        }
    }
    return arr;
}
console.log(number_to_string([-2,2,3,-3]));