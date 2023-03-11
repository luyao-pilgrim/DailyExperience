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
            combinehelper(n, l, i+1)
            path.pop()
        }
    }
}

console.log(combine(4,2))