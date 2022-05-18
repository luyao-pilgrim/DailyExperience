/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const calcStrCount = (s) => {
        let cacheMap = {}
        for (let i = 0; i < s.length; i++){
            const value = s[i]
            cacheMap[value] = typeof cacheMap[value] !== 'undefined' ? cacheMap[value]+1 : 1
        }
        return cacheMap
    }

    const sMap = calcStrCount(s)
    const tMap = calcStrCount(t)

    const getResult = (map1, map2) => {
        if (Object.values(map1).length < Object.values(map2).length) {
          return getResult(map2, map1)
        }
    
        for (const attr in map1) {
          if (map1[ attr ] !== map2[ attr ]) {
            return false
          }
        }
    
        return true
      }
    
    return getResult(sMap, tMap)

};