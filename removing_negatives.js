function remove_negatives(arr){

    let negative_count = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            negative_count++;
        }
        else{
            arr[i - negative_count] = arr[i];
        }
    }
    while (negative_count--) {
        arr.pop();
    }
    return arr;
}
console.log(remove_negatives([-1,2,3,-4,-5,6]));