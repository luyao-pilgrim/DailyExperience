// 字符原生flat
const flat1 = (array) => {
    return array.flat(Infinity)
}

// reduce
const flat2 = (array) => {
    return array.reduce((res, it) => {
        return res.concat(Array.isArray(it) ? flat2(it) : it)
    },[]) //[]是指定初值
}

const flat3 = (arr) => {
    let res = []
    arr.foreach((it) => {
        if(Array.isArray(it)) {
            res = res.concat(flat3(it))
        } else {
            res.push(it)
        }
    })

    return res
}