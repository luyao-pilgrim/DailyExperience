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


let arr2 = [
    1,
    [ 2, 3, 4 ],
    [ 5, [ 6, [ 7, [ 8 ] ] ] ]
  ]
  
  console.log(flat1(arr2))
  console.log(flat2(arr2))