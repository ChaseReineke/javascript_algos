function odd_numbers(){
    var arr = [];
    for (let i = 0; i <= 255; i++){
        if (i%2 === 1){
            arr.push(i);
        }
    }
    console.log(arr);
}
odd_numbers();