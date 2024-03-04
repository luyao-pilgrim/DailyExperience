// 1. 实现一个异步控制类 Deferred，将异步行为 resolve 值的时机和 resolve 后回调的时机分开，实现 resolve 可以在 Promise 外部控制，效果如下：
class Deferred<T> {
    // 补充内容
    constructor() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = (value) => {
          resolve(value)
        }
  
        this.reject = (reason) => {
          reject(reason)
        }
      })
    }
  
    promise: Promise<T>;
  
    resolve: (value: T) => void;
  
    reject: (reason: any) => void;
  }
  
  const deferred = new Deferred<string>();
  
  deferred.promise.then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  });
  
  deferred.resolve('success');
  // 或者
  deferred.reject('error')
  
  
  
  
  
  // ---
  /**
   * 1. 日志滚动
  使用任意前端框架实现一个日志查看组件，需要满足以下要求：
  ● 为避免日志内容过长影响用户使用体验，日志容器高度限定为 500px
  ● 需要每隔 200ms 持续轮询获取日志并填充到日志容器中，轮询调用下方的 getLog 方法获取日志
  ● 当获取到的数据中最后一条数据为 "success" 时，表示获取完毕，停止轮询
  ● 组件卸载时，需要确保停止轮询
  ● 每次追加日志时，默认滚动到日志容器的最下方，方便用户查看最新的日志
  ● 如果用户手动滚动日志内容到距离日志底部 20px 以外的位置，则停止“追加日志时默认滚动到底部”的行为
  ● 如果用户手动滚动日志内容到距离日志底部 20px 以内的位置，则继续“追加日志时默认滚动到底部”的行为
  ● 加分项：为避免滚动监听事件被频繁触发，需要用恰当的方式降低监听函数被调用的频率
   */
  /**
   * Mock 获取日志方法。当最后一条数据为 "success" 时，表示获取完毕。
   * @returns string[]
   * @example
   * [ "Log 0: tgcjno0oose 3knin88p70q", "Log 1: x4t4qav1hq waqld0vlqqc", "Log 2: id2ofn90l09 0wjwrwmyox28",
   *   "Log 3: 5a3935fzk5v 0jzko0un3k4p", "Log 4: 5s5ql5yocpo e7l4hcaohk8", "Log 5: q5h0si9471 4x3p6welglm",
   *   "Log 6: raa0dpauujj 9ko9fulujbc", "Log 7: spesl652jw o3yvyz60qn9", "Log 8: rcaay35adfh stf2sprvdka",
   *   "Log 9: y46w94lylx kdbd9xcjka9",
   *   "success" // if meet "success", 
   * ]
   */
  let finished = false;
  let count = 1;
  export function getLog() {
    const logs: string[] = [];
    if (finished) {
      return Promise.resolve(logs);
    }
    for (let i = 0; i < 10; i++) {
      logs.push(`Log ${count++}: ${Math.random().toString(36).substring(2, 15)} ${Math.random().toString(36).substring(2, 15)}`);
    }
    if (Math.random() < 0.1) {
      finished = true;
      logs.push('success');
    }
    return Promise.resolve(logs);
  }
  
  // 补充组件
  const LogComponent = () => {
    const [logArr, setLogArr] = useState([])
    const [h, setH] = useState(0)
    const fatherRef = useRef()
    const sonRef = useRef()
  
    const getLogWrap = () => {
      getLog.then((newArr) => {
          if(newArr[newArr.length-1] === 'success') { 
            clearInterval(request200) 
          } else {
            setLogArr([...logArr, ...newArr])
          }
          
        })
    }
  
    const handScroll = _.throttle((e) => {
      let [bottom] = getBoundingRect(e.target)
      setH(bottom)
      if(flag) {
        sonRef.current.scrollIntoView({
          block: "bottom"
        })
      }
    },1000)
  
  
    useEffect(() => {
      let request200 = setInterval(() => {
        getLogWrap()
      },200)
  
      return () => {
        clearInterval(request200)
      }
  
    },[])
  
    useEffect(() => {
      if( h > 0 && h < 20) {
        setFlag(true)
        
      }
  
      if(h > 20) {
        setFlag(false)
      }
    },[h])
  
    return (
      <div ref={fatherRef} style={{maxHeight: 500}} onScroll={handScroll}>
        <div ref={sonRef} style={{overflow: 'auto'}}>
          {logArr.map((item) => (
            <div>{item}</div>
          )
          )}
        </div>
        
      </div>
    )
  }
  
  // ---
  /**
   * 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
  假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
  你可以通过调用 isBadVersion(version) 函数来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。
  示例1:
  输入：n = 5, bad = 4
  输出：4 
  解释： 
    调用 isBadVersion(3) -> false 
    调用 isBadVersion(5) -> true 
    调用 isBadVersion(4) -> true
    所以，4 是第一个错误的版本。
    
  示例2:
  输入：n = 1, bad = 1 输出：1 
  提示：
  ● 1 <= bad <= n <= 2^31 - 1
   */
  
  function findFirstBadVersion(isBadVersion: any) {
    
    return function (n: number): number {
      // 补充内容
      //binarySearch
      let left = 0
      let right = n
      while(left < right) {
        let middle = Math.floor(left+right)/2)
        if(isBadVersion(middle)) {
          right = middle - 1
        } else {
          left = middle + 1
        }
      }
  
      return left
  
    }
  }