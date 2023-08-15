

const resolve = (data) => {
    let res = []
    let map = {}
    for(let i = 0; i< data.length; i++) {
        map[data[i]] = data[i].parentId
    }

    data.forEach((item) => {
        let parent = map[item]
        if(parent) {
            if(!res.parent) {
                res.parent = []
            } else {
                res.parent.push(item)
            }
        }else {
            res.push(item)
        }
    })
}

[
    {id:0, pid: 0},
    {id:1, pid:1},
    {id}
]