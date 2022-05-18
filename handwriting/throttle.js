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