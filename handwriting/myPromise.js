class myPromise {
    static PENDING = '待定';
    static FULFILLED = '成功';
    static REJECTED = '拒绝';
    constructor(func) {
        this.status = myPromise.PENDING;
        this.result = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if(this.status === myPromise.PENDING) {
            this.status = myPromise.FULFILLED
            this.result = result
        }
    }
    reject(result) {
        if(this.status === myPromise.PENDING) {
            this.status = myPromise.REJECTED
            this.result = result
        }
    }

    then(ONFULFILLED, ONREJECTED) {
        ONFULFILLED = typeof ONFULFILLED === 'function' ? ONFULFILLED : () => {};
        ONREJECTED = typeof ONREJECTED === 'function' ? ONFULFILLED : () => {};
        if(this.status === myPromise.FULFILLED) {
            setTimeout(() => {
                ONFULFILLED(this.result)
            })
        }
        if(this.status === myPromise.REJECTED) {
            setTimeout(() => {
                ONREJECTED(this.result)
            })
        }
    }
}