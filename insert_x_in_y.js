function insert_x_in_y(arr, x, y){

    arr.push(0);

    for (let i = arr.length - 1; i > y; i--){
        arr[i] = arr[i - 1];
    }

    arr[y] = x;
    return arr;
}
console.log(insert_x_in_y([2,4,8,10], 6, 2));