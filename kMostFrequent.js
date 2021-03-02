function kMostFrequent(arr, k) {
    let newArr = [];
    let freqTable = {};

    for (let i=0; i < arr.length; i++) {
        if (freqTable.hasOwnProperty(arr[i])) freqTable[arr[i]] += 1;
        else freqTable[arr[i]] = 1;
    }

    while (newArr.length < k) {
        let maxCount = 0;
        let maxValue = 0;

        for (key in freqTable) {
            if (freqTable[key] > maxCount) {
                maxCount = freqTable[key];
                maxValue = parseInt(key);
            }
        }
        newArr.push(maxValue);
        delete freqTable[maxValue];
    }
    return newArr;
}

console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
// should log [1, 2]

console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
// should log [0]

console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
// should log [1, 2, 3] in any order