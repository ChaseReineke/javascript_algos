function compareVersions(v1, v2) {
    let shorterString = v1;
    let longerString = v1;
    let sameLength = false;
    if (v1.length === v2.length) sameLength = true;
    else if (v1.length < v2.length) longerString = v2;
    else shorterString = v2;
    for (var i = 0; i < shorterString.length; i++) {
        if (!isNaN(shorterString[i])) {
            if (parseInt(v1[i]) < parseInt(v2[i])) return -1;
            if (parseInt(v1[i]) > parseInt(v2[i])) return 1;
        }
    }
    if (!sameLength) {
        for (i; i < longerString.length; i++) {
            if (!isNaN(longerString[i]) && parseInt(longerString[i]) > 0) {
                if (longerString === v1) return 1;
                if (longerString === v2) return -1;
            }
        } 
    }
    return 0;
}

console.log(compareVersions('0.1', '1.0')); // should log -1
console.log(compareVersions('1.0.1', '1.0')); // should log 1
console.log(compareVersions('2.0', '2.0.0.0')); // should log 0