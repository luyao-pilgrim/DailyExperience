function sendRequest(requestList,limits,callback){

    const promises = requestList.slice() // 取得请求list（浅拷贝一份）

    // 得到开始时，能执行的并发数

    const concurrentNum = Math.min(limits,requestList.length)

    let concurrentCount = 0 // 当前并发数

    // 第一次先跑起可以并发的任务

    const runTaskNeeded = ()=>{

        let i = 0

        // 启动当前能执行的任务

        while(i<concurrentNum){

            i++

            runTask()

        }

    }

    // 取出任务并且执行任务

    const runTask = ()=>{

        const task = promises.shift()

        task && runner(task)

    }




    // 执行器

    // 执行任务，同时更新当前并发数

    const runner = async (task)=>{

        try {

            concurrentCount++

            await task()

        } catch (error) {

        }finally{

            // 并发数--

            concurrentCount--
            
            // 捞起下一个任务
            picker()

        }

    }

// 捞起下一个任务

    const picker = ()=>{
        
        // 任务队列里还有任务并且此时还有剩余并发数的时候 执行
        if(concurrentCount < limits && promises.length > 0 ){

            // 继续执行任务

            runTask()

        // 队列为空的时候，并且请求池清空了，就可以执行最后的回调函数了

        }else if(promises.length ==0 && concurrentCount ==0 ){

            // 执行结束

            callback && callback()

        }

    }



    // 入口执行

    runTaskNeeded()

}




// 第二种async+Promise.race  
let idArray = [1,2,3,4,5,6,7,8,9]
let max = 3
let pool = []
async function run2() {
    for(let i = 0; i < idArray.length; i++) {
        let promise = request(idArray[i])
        promise.then((resolve, reject) => {
            pool.splice(pool.indexOf(promise), 1)
        })
        pool.push(promise)

        if(pool.length === max) {
            await Promise.race(pool)
        }
    }
}
