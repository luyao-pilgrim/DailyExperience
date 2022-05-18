/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
      return ''
    }
  
    let prefix = strs[0]
    const len = strs.length
    const getPrevfix = (str1, str2) => {
      if (str1.length > str2.length) {
        return getPrevfix(str2, str1)
      }
  
      let i = 0
      let substrLen = 0
      const len = str1.length
  
      while (i < len) {
        if (str1[ i ] === str2[ i ]) {
          substrLen++
        } else {
          break
        }
        i++
      }
  
      return str1.substr(0, substrLen)
    }
  
    for (let i = 1; i < len; i++) {
      prefix = getPrevfix(prefix, strs[ i ])
  
      if (prefix === '') {
        return ''
      }
    }
  
    return prefix
  }