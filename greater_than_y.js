function greater_than_y(arr, y){
    var sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > y){
            sum += 1;
        }
    }
    console.log(sum);
}
greater_than_y([1,3,5,7], 3);
greater_than_y([4,2,1,6,7,-3], 1);