/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
let checkIfInstanceOf = (obj, classFunction) => {
    if (obj === null || obj === undefined || classFunction === null || classFunction === undefined) return false;
    while(obj !== null) {
        if(obj.constructor === classFunction) return true
        obj = Object.getPrototypeOf(obj);
        console.log(obj);
    }

    return false
};

checkIfInstanceOf(0, Object)
