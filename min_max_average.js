function min_max_average(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    let avr = sum / arr.length;
    console.log("Min is: " + min + ", " + "Max is: " + max + ", " + "Average is: " + avr);
}
min_max_average([1,2,3,4,5]);
min_max_average([7,9,0,3,2]);