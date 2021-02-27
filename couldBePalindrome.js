function couldBePalindrome(str) {
    let i = 0;
    while (i < str.length) {
        let dropped = false;
        for (let j = i + 1; j < str.length; j++) {
            if (str[i]===str[j]) {
                str = str.slice(0, i) + str.slice(i + 1, j) + str.slice(j+1);
                dropped = true;
                break;
            }
        }
        if (dropped) continue;
        i++;
    }
    if (str.length < 2) return true;
    return false;
}

console.log(couldBePalindrome('PPo'));
// should log true - could be 'PoP'

console.log(couldBePalindrome('oooPP'));
// should log true - could be 'PoooP'

console.log(couldBePalindrome('Yuuyuu'));
// should log false