function random_array(){
    var arr = [];
    for (let i = 0; i < 10; i++){
        var random_int = Math.floor(Math.random() * 101);
        arr.push(random_int);
    }
    return arr;
}
console.log(random_array());