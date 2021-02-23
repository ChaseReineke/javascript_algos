function addHonorificToFormattedNames(honorific, fullNames) {
    let solutions = [];
    for (let i = 0; i < fullNames.length; i++) {
        let lastName = "";
        let firstName = "";
        let comma = false;
        for (let j = 0; j < fullNames[i].length; j++) {
            if (fullNames[i][j] === " " && comma) {
                continue;
            }
            if (fullNames[i][j] === ",") {
                comma = true;
                continue;
            }
            if (comma) {
                firstName += fullNames[i][j];
            }
            else {
                lastName += fullNames[i][j];
            }
        }
        solutions.push(honorific + " " + firstName + " " + lastName);
    }
    return solutions;
}

console.log(addHonorificToFormattedNames('Mr.', ['Smith, Bob', 'Jones, Mike']));
// should log ['Mr. Bob Smith', 'Mr. Mike Jones']

console.log(addHonorificToFormattedNames('Mrs.', ['HorseDoctor, Beth']));
// should log ['Mrs. Beth HorseDoctor']