function questionMarks(str) {
    var counter = 0;
    var counting = false;
    var num1;
    for (var i = 0;i<str.length; i++){
        if(!isNaN(parseInt(str[i]))&& counting==false){
            counting=true;
            num1=parseInt(str[i])
        }
        else if(str[i]=="?"&&counting==true){
            counter++;
        }
        else if(!isNaN(parseInt(str[i]))&& counting==true){
            if(counter==3 && (num1+parseInt(str[i])==10)){
                return true
            }
            else{
                counter = 0;
                num1 = parseInt(str[i])
            }
        }
    }
    return false;
}

parseInt('s') // returns NaN
parseInt('5') // returns 5
isNaN(NaN) // returns true
isNaN(parseInt('9')) // returns false

console.log(questionMarks('aa6?9')); // should log false
console.log(questionMarks('acc?7??sss?3rr1??????5')); // should log true
console.log(questionMarks('?3?d?dad?7??????3')); // should log true
console.log(questionMarks('7??????3')); // should log false