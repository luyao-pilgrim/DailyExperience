var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z\d]/g, '').toLowerCase()
    const length = str.length
    let i = 0

    while (i < length / 2) {
        if (str[ i ] !== str[ str.length - 1 - i ]) {
            return false
        }
        i++
    }

    return true

};

console.log(isPalindrome("A man, a plan, a canal: Panama"));