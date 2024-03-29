/**
 * @param {number} n
 * @return {number}
 * 核心：1.动态规划，保存当前这个值的最大值，并每次比较取大
 * 2.当前最大值为j*(i-j) or j * dp[i-j]
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