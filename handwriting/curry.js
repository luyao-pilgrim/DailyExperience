const curry = (fn) => {
    function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function(...args2) {
                return curried.apply(this, [...args, ...args2])
            }
        }
    }

    return curried
}