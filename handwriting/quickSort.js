const quickSort = (arr, start, end) => {
    if(end - start < 1) return
    let left = start
    let right = end
    let base = arr[left]
    while(left < right) {
        while(left < right && arr[right] >= base) {
            right--
        }
        arr[left] = arr[right]
        while(left < right && arr[left] <= base) {
            left++
        }
        arr[right] = arr[left]
    }
    arr[left] = base
    quickSort(arr, start, left-1)
    quickSort(arr, left+1, end)
}


const _quick = (arr) => {
    quickSort(arr, 0, arr.length-1)
    return arr
}

console.log(_quick([2,3,1,4,5,7,8,6]))

