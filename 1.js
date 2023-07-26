function findTriplet( arr ,  target ) {
    let used = new Array(arr.length).fill(false)
    // write code here
    for(let i = 0; i < arr.length; i++) {
        let t1 = arr[i]
        used[i] = true
        for(let j = 0; j <arr.length; j++) {
            if(used[j]) continue
            let t2 = arr[j]
            used[j] = true
            for(let k = 0; k < arr.length; k++) {
                if(used[k]) continue
                let t3 = arr[k]
                if(t1+t2+t3 === target) {
                    return [t1,t2,t3]
                }
            }
            used[j] = false
        }
        used[i] = false
    }
    
    return []
    
}

console.log(findTriplet([1,2,3,4], 6));