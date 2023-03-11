/**
 * @param {number[]} prices
 * @return {number}
 * 核心：通过两个变量随时保持住前面all最低价，前面all最大利润， 并和当前比较
 */
 var maxProfit = function(prices) {
    let b = Infinity;
    let a = 0;
    for(let p of prices) {
        b = Math.min(p, b);
        a = Math.max(a, p-b);
    }

    return a;
};

