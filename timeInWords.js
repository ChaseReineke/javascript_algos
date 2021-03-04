function timeInWords(hours, minutes) {
    let numbersToWords = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "forteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        21: "twenty-one",
        22: "twenty-two",
        23: "twenty-three",
        24: "twenty-four",
        25: "twenty-five",
        26: "twenty-six",
        27: "twenty-seven",
        28: "twenty-eight",
        29: "twenty-nine",
    }
    let specialMinutes = {
        0: "o'clock",
        15: "quarter",
        30: "half past",
    };
    let solutionStr;
    if (minutes === 0) {
        solutionStr = numbersToWords[hours.toString()] + " " + specialMinutes["0"];
    }
    if (minutes === 30) {
        solutionStr = specialMinutes["30"] + " " + numbersToWords[hours.toString()];
    }
    if (minutes < 30) {
        if (specialMinutes.hasOwnProperty(minutes)){
            solutionStr = specialMinutes[minutes.toString()] + " past " + numbersToWords[hours.toString()];
        }
        else {
            solutionStr = numbersToWords[minutes.toString()] + " minutes past " + numbersToWords[hours.toString()];
        }
    }
    if (minutes > 30 && minutes < 60) {
        let newMinutes = 60 - minutes;
        if (newMinutes === 15) {
            solutionStr = specialMinutes[newMinutes.toString()] + " to " + numbersToWords[((hours+1)%24).toString()];
        }
        else {
            solutionStr = numbersToWords[newMinutes.toString()] + " minutes to " + numbersToWords[((hours+1)%24).toString()];
        }
    }
    return solutionStr;
}

console.log(timeInWords(5, 15)); // should log 'quarter past five'
console.log(timeInWords(5, 30)); // should log 'half past five'
console.log(timeInWords(5, 40)); // should log 'twenty minutes to six'
console.log(timeInWords(5, 45)); // should log 'quarter to six'
console.log(timeInWords(12, 0)); // should log `twelve o'clock`
console.log(timeInWords(23, 28)); // should log 'twenty eight minutes past twenty three'