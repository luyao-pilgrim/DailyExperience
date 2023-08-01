// 多维拍平+去除重复项


const flat = (arr) => {
    let res1 = []
    arr.reduce((it, index) => {
        res1.concat(Array.isArray(it) ? flat(it) : it)
    },[])

    return res1
}

const quchong = (arr) => {
    let res2 = []
    arr.map((item, index) => {
        if(arr.indexOf(item) === index) {
            res2.push(item)
        }
    })

    return res2
}


const fn = (arr) => {
    
    let a = flat(arr)
    let b = quchong(a)

    return b
    
}

const array = [1,1,[2,1,[3,4,1]]]

console.log(flat(array));











let res = []

const back = (node) => {
    if(!node) {
        return
    }
    back(node.left)
    back(node.right)
    res.push(node.val)
}