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

class myPromise2 {
    constructor(executor) {
        this.status = 'pending';
        this.value = null;
        this.reason = null;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = (value) => {
            if (this.status = 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn());
            }
        };

        let reject = (reason) => {
            if (this.status = 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };

        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        return new myPromise2((resolve, reject) => {
            if (this.status === 'fulfilled') {
                setTimeout(() => {
                    const x = onFulfilled(this.value);
                    x instanceof myPromise2 ? x.then(resolve, reject) : resolve(x)
                })
            }
            if (this.status === 'rejected') {
                setTimeout(() => {
                    const x = onRejected(this.reason)
                    x instanceof myPromise2 ? x.then(resolve, reject) : resolve(x)
                })
            }
            if (this.status === 'pending') {
                this.onFulfilledCallbacks.push(() => { // 将成功的回调函数放入成功数组
                    setTimeout(() => {
                        const x = onFulfilled(this.value)
                        x instanceof myPromise2 ? x.then(resolve, reject) : resolve(x)
                    })
                })
                this.onRejectedCallbacks.push(() => { // 将失败的回调函数放入失败数组
                    setTimeout(() => {
                        const x = onRejected(this.reason)
                        x instanceof myPromise2 ? x.then(resolve, reject) : resolve(x)
                    })
                })
            }
        })
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