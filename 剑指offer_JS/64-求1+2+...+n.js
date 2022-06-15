/**
 * @param {number} n
 * @return {number}
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 */

var sumNums = function (n) {
    return (n ** 2 + n) >> 1;
};