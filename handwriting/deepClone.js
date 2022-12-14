// 考虑null特殊情况
const clone = (target) => {

    // 1.typeof object + !== null
    const isObject = (obj) => typeof obj === 'object' && obj !== null

    
    if(isObject(target)){
        
        for(const key in target) {
            const value = target[key]
            cloneTarget[key] = isObject(value) ? clone(value) : value
        }
        return cloneTarget;
    }else{
        return target;
    }
}


const deepClone = (obj) => {
    if(!obj || typeof obj !== 'object') return obj
    let cloneObj = Array.isArray(obj) ? [] : {}
    for(let key in obj) {
        cloneObj[key] = deepClone(obj[key])
    }

    return cloneObj
}