function canBuildString1FromString2(str1, str2) {
    const newStr1 = str1.toLowerCase();
    const newStr2 = str2.toLowerCase();
    let freq1 = {};
    let freq2 = {};
    for (let i = 0; i < newStr1.length; i++) {
        if (!freq1.hasOwnProperty(newStr1[i])) freq1[newStr1[i]] = 1;
        else freq1[newStr1[i]] += 1;
    }
    for (let i = 0; i < newStr2.length; i++) {
        if (!freq2.hasOwnProperty(newStr2[i])) freq2[newStr2[i]] = 1;
        else freq2[newStr2[i]] += 1;
    }
    for (var key in freq1) {
        if (freq1[key] > freq2[key]) return false; 
        if (!freq2.hasOwnProperty(key)) return false;
    }
    return true;
}

'HELLO'.toLowerCase(); // returns 'hello'

console.log(canBuildString1FromString2('Hello World', 'lloeh wordl')); // should log true
console.log(canBuildString1FromString2('Hey', 'hello')); // should log false
console.log(canBuildString1FromString2('hello', 'helo')); // should log false
console.log(canBuildString1FromString2('hello', 'lllheo')); // should log true