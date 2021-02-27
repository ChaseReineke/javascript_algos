function diagonalDifference(arr) {
    var sum1=0;
    var sum2=0;
    var final = 0;
    for (var i=0; i<arr.length; i++) {
        sum1+=arr[i][arr.length-i-1];
    }
    for (i=0; i<arr.length; i++) {
        sum2+=arr[i][i];
        console.log('sum2 is', sum2);
    }
    final = sum1 - sum2;
    return Math.abs(final);
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [7,8,9]]));