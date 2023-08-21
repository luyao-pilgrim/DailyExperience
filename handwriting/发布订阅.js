// 这个EventEmitter是中介的形式，里面的方法需要另外的人去调用

class EventEmitter {

    constructor() {
        this.handleMap = {}
    }

    on(eventName, ...handler){
        if(!this.handleMap[eventName]) {
            this.handleMap[eventName] = []
        }
        this.handleMap[eventName].push(...handler)
    }

    off(eventName, handler){
        if(!eventName) {
            this.handleMap = {}
            return
        }

        if(!this.handleMap[eventName]) {
            return
        }

        this.handleMap[eventName].forEach((cur, index) => {
            if(cur == handler) {
                this.handleMap[eventName].splice(index,1)
            }
        })
    } 

    emit(eventName, ...args) {
        if(!this.handleMap[eventName]) {
            return
        }

        this.handleMap[eventName].forEach((cur) => {
            cur.apply(this, args)
        })
    }

    once(eventName, handler){
        const wrap = () => {
            handler.apply(this)
            this.off(eventName, handler)
        }

        this.on(eventName, wrap)
    }
}