function find_average(arr){
    var sum = 0;
    var avr = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avr = sum / arr.length;
    console.log(avr);
}
find_average([2,3,4,5,6]);