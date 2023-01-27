const combine = (n,k) => {
    let result = []
    let path = []
    combinehelper(n,k,1)

    return result

    function combinehelper(n, l, index){
        if(path.length === l) {
            result.push([...path])
            return
        }

        for(let i = index; i <= n; i++) {
            path.push(i)
            combinehelper(n, l, index+1)
            path.pop()
        }
    }
}

// console.log(combine(4,2))

const fang = (n, l) => {
    let res = [], path = []
    backtracking(1, path)
    return res

    function backtracking(start, path) {
        if(path.length === l) {
            res.push([...path])
            return
        }

        for(let i = start; i <= n; i++) {
            path.push(i)
            backtracking(i+1, path)
            path.pop()
        }
    }
}

const youlaile = (n, l) => {
    let res = [], path = []
    backtricking(path, 1)
    return res
    function backtricking(path, start){
        if(path.length === l) {
            res.push([...path])
            return
        }
        for(let i = start; i <= n; i++) {
            path.push(i)
            backtricking(path, i+1)
            path.pop()
        }
    }
}




const bei = (n, k) => {
    let res = [], path = []
    backtricking(n, k, 1)
    function backtricking(n, k, index) {
        if(path.length === k) {
            res.push([...path])
            return
        }

        for(let i = index; i <= n; i++) {
            path.push(i)
            backtricking(n, k, i+1)
            path.pop()
        }
    }

    return res
}

console.log(bei(4,2))