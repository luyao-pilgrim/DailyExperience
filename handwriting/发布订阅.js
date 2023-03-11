// 这个EventEmitter是中介的形式，里面的方法需要另外的人去调用

class EventEmitter {

    constructor() {
        this.eventList = {}
    }

    on(event, fn) {
        if(!this.eventList[event]) this.eventList[event] = []
        this.eventList[event].push(event)
    }

    emit(event, ...args) {
        if(this.eventList[event]) {
            this.eventList[event].foreach((func) => {
                func.apply(this, args)
            })
        }
    }

    off(event, fn) {
        let index = this.eventList[event].findIndex(v => v === fn)
        this.eventList[event].splice(index, 1)
    }
}