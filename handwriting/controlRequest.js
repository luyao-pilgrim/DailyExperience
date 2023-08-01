const control = (list, max) => {
    const fn = () => {
        if(!list.length) return
        let num = Math.min(list.length, max)
        for(let i = 0; i < num; i++) {
            let f = list.shift()
            f.finally(() => {
                max++
                fn()
            })
        }
    }

    fn()
}