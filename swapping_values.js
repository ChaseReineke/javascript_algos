function swap_values(arr, x, y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return arr;
}
console.log(swap_values([1,3,5,7,9], 0, 4));
console.log(swap_values([1,2,3,4,5,6,7], 2, 5));