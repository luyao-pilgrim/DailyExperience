var validPalindrome = function(s) {
    const isPalindrime = (st, ed) => {
        while(st < ed) {
            if(s[st] !== s[ed]) {
                return false
            }
            st++
            ed--
        }
        return true
    }
    //头指针
    let i = 0;
    //尾指针
    let j = s.length - 1
    while(i < j && s[i] === s[j]){
        i++
        j--
    }
    if(isPalindrime(i+1, j)){
        return true
    }
    if(isPalindrime(i, j-1)){
        return true
    }

    return false
};