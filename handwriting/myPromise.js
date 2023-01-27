class myPromise1 {
    static PENDING = '待定';
    static FULFILLED = '成功';
    static REJECTED = '拒绝';
    constructor(func) {
        this.status = myPromise.PENDING;
        this.result = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.status === myPromise.PENDING) {
            this.status = myPromise.FULFILLED
            this.result = result
        }
    }
    reject(result) {
        if (this.status === myPromise.PENDING) {
            this.status = myPromise.REJECTED
            this.result = result
        }
    }

    then(ONFULFILLED, ONREJECTED) {
        ONFULFILLED = typeof ONFULFILLED === 'function' ? ONFULFILLED : () => { };
        ONREJECTED = typeof ONREJECTED === 'function' ? ONFULFILLED : () => { };
        if (this.status === myPromise.FULFILLED) {
            setTimeout(() => {
                ONFULFILLED(this.result)
            })
        }
        if (this.status === myPromise.REJECTED) {
            setTimeout(() => {
                ONREJECTED(this.result)
            })
        }
    }
}

class MyPromise2  {
    constructor(executor) {
        this.status = 'pending'
        this.promiseValue = null
        this.promiseReason = null
        // 当resolve在setTimeout里面执行，存储到数组里面
        this.onResolveCallback = []
        this.onRejectedCallback = []


        let resolve = (value) => {
            if(this.status === 'pending') {
                this.status = 'fulfilled'
                this.promiseValue = value
                this.onResolveCallback.forEach(fn => fn())
            }
        }

        let reject = (reason) => {
            if(this.status === 'pending') {
                this.status = 'rejected'
                this.promiseReason = reason
                this.onRejectedCallback.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }


    then(onResolve, onReject) {
        if(this.status = 'fulfilled') {
            onResolve(this.promiseValue)
        }
        if(this.status = 'rejected') {
            onReject(this.promiseReason)
        }
        if(this.status = 'pending') {
            this.onResolveCallback.push(() => {
                onResolve(this.value)
            })
            this.onRejectedCallback.push(() => {
                onReject(this.reason)
            })
        }

    }
}

function myAll(promises){
    // 问题关键：什么时候要执行resolve，什么时候要执行 reject
    return new Promise((resolve,reject) => {
        values = []
        // 迭代数组中的 Promise，将每个 promise 的结果保存到一个数组里
        promises.forEach(promise => {
            // 如果不是 Promise 类型要先包装一下
            // 调用 then 得到结果
            Promise.resolve(promise).then(res => {
                values.push(res)
                // 如果全部成功，状态变为 fulfilled
                if(values.length === promises.length){
                    resolve(values)
                }
                },err => { // 如果出现了 rejected 状态，则调用 reject() 返回结果
                reject(err)
            })
        })
    }
)
}

// 哪个 promise 状态先确定，就返回它的结果
function myRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        })
    })
}

Promise.prototype.finally = function (cb) {
    return this.then(function (value) {
      return Promise.resolve(cb()).then(function () {
        return value
      })
    }, function (err) {
      return Promise.resolve(cb()).then(function () {
        throw err
      })
    })
  }