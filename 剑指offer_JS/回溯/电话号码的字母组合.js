/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {

    const number = {2:['a','b','c'],
                    3:['d','e','f'],
                    4:['g','h','i'],
                    5:['j','k','l'],
                    6:['m','n','o'],
                    7:['p','q','r','s'],
                    8:['t','u','v'],
                    9:['w','x','y','z']};
    let result = [],arr = [],n = digits.length;
    if(n===0){return []}

    for(let i=0;i<n;i++){
        arr.push(number[digits[i]]); // 生成目标号码的二维数组
    }
    let str = '';

    /**
        @n : 字符串的长度
        @level : 递归时应遍历的二位数组的层数
     */

    let backTracking = (n,level)=>{   // 回溯函数
        if(str.length === n){     // 函数出口，当组成的字符串长度正好等于n时，就往结果数组中入栈
            result.push(str);
            return;
        }
        for(let i=0;i<arr[level].length;i++){// 遍历每一层的数组
            str += arr[level][i];               
            backTracking(n,level+1);  // 当前层遍历完毕，去往下一层进行递归
            str = str.slice(0,-1);    // str把最后一个新加进来的字符截取掉，开始回溯。
        }
    }
    backTracking(n,0);
    return result;

    
};