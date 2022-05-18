const myInstance = (obj, func) => {
    if(!(obj && ['object','function'].includes(typeof obj))) {
        return false
    }

    let proto = obj

    while (proto = Object.getPrototypeOf(proto)) {
        if (proto === null) {
            return false
        } else if (proto === func.prototype) {
            return true
        }
    }

    return false
}