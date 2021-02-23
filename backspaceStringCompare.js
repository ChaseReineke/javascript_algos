function backspaceStringCompare(str1, str2) {
    var arr1 = [];
    var arr2 = [];
    for (var i=0; i<str1.length; i++){
        if (str1[i]==="#"){
            arr1.pop();
        }
        else{
            arr1.push(str1[i]);
        }
    }
    for (var i=0; i<str2.length; i++){
        if (str2[i]==="#"){
            arr2.pop();
        }
        else{
            arr2.push(str2[i]);
        }
    }
    let newStr1 = "";
    for (var i=0; i<arr1.length; i++) {
        newStr1 += arr1[i];
    }
    let newStr2 = "";
    for (var i=0; i<arr2.length; i++) {
        newStr2 += arr2[i];
    }
    return newStr1===newStr2;
}

console.log(backspaceStringCompare('ab#c', 'ad#c'));
// should log true - they both become 'ac'

console.log(backspaceStringCompare('ab##', 'c#d#'));
// should log true - they both become ''

console.log(backspaceStringCompare('a##c', '#a#c'));
// should log true - they both become 'c'