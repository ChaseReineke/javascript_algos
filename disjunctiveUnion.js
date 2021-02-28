function disjunctiveUnion(arr1, arr2) {
    let obj = {}, newArr=[];
    for(let i=0; i<arr1.length; i++) {
        if(obj[arr1[i]] >= 1){
            obj[arr1[i]] += 1;
        } else {
            obj[arr1[i]] = 1;
        }
    }
    for(let i = 0; i < arr2.length; i ++) {
        if(obj[arr2[i]] >= 1){
            obj[arr2[i]] += 1;
        } else {
            obj[arr2[i]] = 1;
        }
    }
    for(let item in obj) {
        if(obj[item] === 1) {
            newArr.push(+item);
        }
    }
    return newArr;
}
console.log(disjunctiveUnion([1, 2, 2, 2], [2, 1]));
  // should log [] since 1 and 2 are in both

console.log(disjunctiveUnion([1, 2, 3, 1, 2], [1, 2]));
  // should log [3]