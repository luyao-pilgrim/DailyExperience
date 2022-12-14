/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    let i, j, dp = new Array(n + 1).fill(0), nowBigger;
    dp[2] = 1;
    for(i = 2; i <= n; i++) {
        for(j = 1; j < i; j++) {
            nowBigger = Math.max(j*(i-j), j*dp[i-j])
            dp[i] = Math.max(dp[i], nowBigger)
        }
    }

    return dp[n]
};