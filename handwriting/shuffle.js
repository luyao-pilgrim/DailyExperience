const shuffle = (arr) => {
    let res = []
    while(arr.length > 0) {
        let random = Math.floor(Math.random() * arr.length)
        res.push(arr[random])
        arr.splice(random, 1)
    }

    return res
}

console.log(shuffle([1,2,3,4,5]))