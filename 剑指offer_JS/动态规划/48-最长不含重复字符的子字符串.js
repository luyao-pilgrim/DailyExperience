/**
 * @param {string} s
 * @return {number}
 * 也是动态规划，一边走一边搞
 * abcabcaaa
 */
 var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let chars = new Set();
    for (let i = 0, j = 0; i < s.length; i++) {
        while(chars.has[s[i]]) {
            chars.delete(s[j]);
            j++;
        }
        chars.add(s[i]);
        res = Math.max(res, i-j+1);
    }

    return res;
};