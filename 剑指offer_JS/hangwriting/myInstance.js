const myInstance = (obj, func) => {
    //验证
    if (!(obj && ['object', 'function'].includes(typeof obj))) {
        return false
    }

    let proto = Object.getPrototypeOf(obj)
    if (proto === func.prototype) {
        return true
    } else if (proto === null) {
        return false
    } else {
        return myInstance(proto, func)
    }
}