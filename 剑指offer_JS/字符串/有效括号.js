/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const n = s.length
    if(n % 2 === 1) return false
    const map = new Map()
    let res = []
    map.set(']','[')
    map.set('}','{')
    map.set(')','(')
    for(let char of s) {
        if(map.has(char)) {
            if(!res.length || res[res.length-1] !== map.get(char)) return false
            res.pop()
        } else {
            res.push(char)
        }
    }

    return !res.length
};