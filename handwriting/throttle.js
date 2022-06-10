/**
 * 节流
 * 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
 * 个人理解 函数节流就是fps游戏的射速，就算一直按着鼠标射击，也只会在规定射速内射出子弹。
 */
// 基于时间戳
const throttle = function (func, delay) {
    let startTime = Date.now()

    return function(...args) {
        lastTime = Date.now()
        if(lastTime - startTime > delay) {
            func.apply(this,args)
            startTime = Date.now()
        }
    }
}

// 基于定时器
const throttle2 = function (func, delay) {
    let timer = null

    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args)
                timer = null
            }, delay) 
        }
    }
}
