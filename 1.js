
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('success')
        console.log('timer1')
    })
    console.log('p1内容')
})

const promise2 = promise1.then(() => {
    throw new Error('error!!!')
})

console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
    console.log('timer2')
    console.log('promise1', promise1)
    console.log('promise2', promise2)
},2000)