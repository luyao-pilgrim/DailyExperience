const merge = (l, r) => {
    let res = []
    let m = 0
    let n = 0

    while(m < l.length && n < r.length) {
        while (l.length > 0 && r.length > 0) {
            if (l[0] < r[0]) {
                temp.push(l.shift());
            } else {
                temp.push(r.shift());
            }
        }
        return res.concat(l).concat(r);
    
    }

}

const mergeSort = (nums) => {
    
    let len = nums.length
    if(len === 1) {
        return nums
    }
    const index = Math.floor(len/2)
    const arrLeft = nums.slice(0,index)
    const arrRight = nums.slice(index)

    const left = mergeSort(arrLeft)
    const right = mergeSort(arrRight)

    return merge(left, right)
}

