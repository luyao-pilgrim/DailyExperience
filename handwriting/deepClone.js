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


