// 1.Set
const removeDuplicate1 = (array) => {
    return [...new Set(array)]
}

//indexOf
const removeDuplicate2 = (array) => {
    let result = []

    array.forEach((it, i) => {
        if (array.indexOf(it) === i) {
            result.push(it)
        }
    })

    return result
}

const removeDuplicate3 = (array) => {
    return Array.from(new Set(array))
}

let testArray = [ 1, 2, 3, 1, 2, 3, 4 ]
console.log(removeDuplicate2(testArray));
console.log(removeDuplicate1(testArray));
console.log(removeDuplicate3(testArray));