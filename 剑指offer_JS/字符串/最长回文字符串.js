/**
 * @param {string} s
 * @return {string}
 * 1.分为单数双数两种情况
 * 2.遍历每一个char扩散开去找
 */
var longestPalindrome = function(s) {
    let max = ''

    for(let i = 0; i < s.length; i++) {
        helper(i, i)
        helper(i, i+1)
    }

    function helper(l, r){
        while(l >= 0 && r < s.length && s[l] === s[r]){
            l--
            r++
        }

        let maxStr = s.slice(l+1, r)
        max = maxStr.length > max.length ? maxStr : max
    }

    return max
};

console.log(longestPalindrome("abbccdfggfd"))