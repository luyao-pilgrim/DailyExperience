/**
 * 防抖
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
 * 个人理解 函数防抖就是法师发技能的时候要读条，技能读条没完再按技能就会重新读条。
 */
const debounce = (func, delay) => {
    let timer = null

    return function (...args) {
        clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}



