function reversing(arr){
    var temp = 0;
    for (let i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length - 1 -i] = temp;
    }
    return arr;
}
console.log(reversing([1,2,3,4,5,6]));
console.log(reversing([1,2,3,4,5,6,7,8,9]));