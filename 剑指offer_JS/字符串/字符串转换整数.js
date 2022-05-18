/**
 * @param {string} str
 * @return {number}
 */
 var strToInt = function(str) {
    const matchRe = /\s*([+\-]?\d*).*?/
    const match = str.match(matchRe)
    const max = Math.pow(2, 31) - 1
    const min = -max - 1
    let result = 0 

    const macthNum = match[1]

    if(str[0])

    if (match && !(macthNum == '+' || macthNum === '-')) {
        if (macthNum >= min && macthNum <= max) {
            result = macthNum
        } else if (macthNum < min) {
            result = min
        } else {
            result = max
        }
    }

    return result

};

console.log(strToInt('   -1auksfue '));