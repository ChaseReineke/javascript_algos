function find_max(arr){
    var max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}
find_max([-3,6,5,-8,4]);