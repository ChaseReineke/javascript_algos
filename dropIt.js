function dropIt(arr, callback) {
    let i = 0;
    while (i < arr.length) {
        const check = callback(arr[i]);
        if (!check) {
            arr.splice(i, 1);
            continue;
        }
        i++;
    }
    return arr;
}

const isEven = num => num % 2 === 0

const firstArr = [1, 3, 5, 7, 2, 4, 6];
const firstResult = dropIt(firstArr, isEven);

console.log(firstResult); // should log [2, 4, 6]
console.log(firstArr === firstResult); // should log true

const secondArr = [1, 3, 5, 7, 9];
const secondResult = dropIt(secondArr, isEven);

console.log(secondResult); // should log []
console.log(secondArr === secondResult); // should log true