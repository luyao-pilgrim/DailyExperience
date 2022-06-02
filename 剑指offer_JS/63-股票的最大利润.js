/**
 * @param {number[]} prices
 * @return {number}
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