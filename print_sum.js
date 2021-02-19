function print_sum(){
    var sum = 0;
    for (let i = 0; i <= 5000; i++){
        if (i%2 === 1){
            sum+= i;
        }
    }
    console.log(sum);
}
print_sum();