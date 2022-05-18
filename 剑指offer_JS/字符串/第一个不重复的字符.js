/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let cacheMap = {}

    for (let i = 0; i < s.length; i++){
        const value = s[i]
        cacheMap[value] = typeof cacheMap[value] !== 'undefined' ? cacheMap[value]+1 : 1
    }

    for (let i = 0; i < s.length; i++){
        if(cacheMap[s[i]] === 1) {
            return s[i]
        }
    }
    return ' '
};