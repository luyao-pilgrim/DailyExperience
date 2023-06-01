const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
      }
    let pivot = Math.floor(arr/2)
    let left = []
    let right = []
    for(let i = 0; i < arr.length; i++) {
        if(i === pivot) {
            continue;
        }
        if(arr[i] < arr[pivot]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), arr[pivot], ...quickSort(right)]
}