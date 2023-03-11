# React

## JSX

JSX-->React.createElement-->fiber对象

![](C:\Users\陆遥\Desktop\DailyExperience\笔记\images\2023-01-24-16-12-37-image.png)

children, return, sibling

`createElement` 参数：  

- 第一个参数：如果是组件类型，会传入组件对应的类或函数；如果是 dom 元素类型，传入 div 或者 span 之类的字符串。

- 第二个参数：一个对象，在 dom 类型中为标签属性，在组件类型中为 props 。

- 其他参数：依次为 children，根据顺序排列。

**可控性render?**

## 组件通信主流

React 一共有 5 种主流的通信方式：

1. props 和 callback 方式
2. ref 方式。
3. React-redux 或 React-mobx 状态管理方式。
4. context 上下文方式。
5. event bus 事件总线。

## hooks为什么不能写在条件判断or循环语句内？

源码可以看作维护一个组件全局的表，state和setters一一对应，以index一一对应，如果按条件看是不是执行的话，读取这些对应关系时候就会错位

## 性能优化useMemo,useCallback

render-->state改变时候
React.memo包裹子组件-->问题：props是对象等复杂数据类型，仍会re-render
useMemo,useCallback-->父组件需要把变量，函数作为props往下传的时候，避免re-render去包裹

## forwardRef+useImprenative

ref:对DOM元素的原生控制，焦点，scroll，视频音频播放等等
forwardRef+useImperativeHandle-->函数组件不能直接使用ref，通过fowardRef转发，使得父组件可以控制子组件中的DOM
useImperativeHandle:可以控制子组件多个ref

## 数据双向绑定in React

情况：在使用input,textarea,checkbox,select等场景下的双向绑定

受控组件+onChange handler

## Re-render

state改变是re-render的唯一因素

问题，如果props是object，怎么办？-->每次function执行都是新的，每次这个object即使没有改变也是新的-->不管有没有memo包装都是会re-render，这时候需要在上一层用useMemo包装

## React-Router v6

## React设计模式

## 生命周期以及对应的effect钩子

创建->初始化数据->编译模板->挂载DOM->渲染，更新->卸载

![](C:\Users\陆遥\Desktop\DailyExperience\笔记\images\2023-02-07-09-58-50-image.png)

1.创建阶段：

**constructor**:数据初始化

**getDerivedStateFromProps**:观察state是否去受到props的影响

在每次`render`方法前调用，第一个参数为即将更新的`props`，第二个参数为上一个状态的`state`，可以比较`props` 和 `state`来加一些限制条件，防止无用的state更新

**render**：会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染。

**componentDidMount**:数据获取，DOM事件绑定

2.更新阶段：

3.销毁阶段

## hooks大全

![](C:\Users\陆遥\Desktop\DailyExperience\笔记\images\2023-01-17-17-05-33-image.png)

**why hooks?**

1.全面拥抱函数式编程（如何去理解）

2.更好的逻辑复用，可以去自定义hooks

### 1.数据更新驱动

**1.useState**

- **setState的闭包问题**

1.Index场景，`setTinterval`每一次都是新创建，每次创建都是闭包`number`指定为了0，不会改变

2.Counter场景，传入空的依赖数组 `[]`，意味着该 hook 只在组件挂载时运行一次，并非重新渲染时。但如此会有问题，在 `setInterval` 的回调中，`count` 的值不会发生变化。因为当 effect 执行时，我们会创建一个闭包，并将 `count` 的值被保存在该闭包当中，且初值为 `0`。每隔一秒，回调就会执行 `setCount(0 + 1)`，因此，`count` 永远不会超过 1。

原理一样的，闭包-->解决：设置依赖项or使用setState函数式更新

```jsx
function Index(){
    const [ number, setNumber ] = React.useState(0)
    const handleClick = () => setInterval(()=>{
        // 此时 number 一直都是 0
        setNumber(number + 1 ) 
    },1000)
    //之后一直都是同一个setInterval了所以number都是0
    return <button onClick={ handleClick } > 点击 { number }</button>
}


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); // 这个 effect 依赖于 `count` state
    }, 1000);
    return () => clearInterval(id);
  }, []); // 🔴 Bug: `count` 没有被指定为依赖

  return <h1>{count}</h1>;
}
```

- **setState函数式更新**

会自动参数带上最新的state值，不会去有闭包问题，所以最好每次都用函数式更新

- **setState更新机制**

18前-->批量更新机制bathedupdate,使用异步setTimeout or promise可以打破这个机制，有`unstable_batchedUpdates`方法可以在异步中也使用批量更新

18-->都是异步，会去自动进行批量更新，不受异步限制

###### setState执行机制？

1.同步，异步都可能发生
setTimeout,原生DOM中是同步，React事件中是异步
2.批量更新策略
有点类似于Object.assign

类组件中setState-->

调用 setState 方法，实际上是 React 底层调用 Updater 对象上的 enqueueSetState 方法。批量更新，实际用到了事件系统中batchedEventUpdates 方法，在 React 事件执行之前通过 `isBatchingEventUpdates=true` 打开开关，开启事件批量更新，当该事件结束，再通过 `isBatchingEventUpdates = false;` 关闭开关，然后在 scheduleUpdateOnFiber 中根据这个开关来确定是否进行批量更新。

在异步中，执行延后，isBatchingEventUpdates已经设置为false啦

**2.useReducer**

类似于在组件中直接redux逻辑

```jsx
const DemoUseReducer = ()=>{
    /* number为更新后的state值,  dispatchNumbner 为当前的派发函数 */
   const [ number , dispatchNumbner ] = useReducer((state,action)=>{
       const { payload , name  } = action
       /* return的值为新的state */
       switch(name){
           case 'add':
               return state + 1
           case 'sub':
               return state - 1 
           case 'reset':
             return payload       
       }
       return state
   },0)
   return <div>
      当前值：{ number }
      { /* 派发更新 */ }
      <button onClick={()=>dispatchNumbner({ name:'add' })} >增加</button>
      <button onClick={()=>dispatchNumbner({ name:'sub' })} >减少</button>
      <button onClick={()=>dispatchNumbner({ name:'reset' ,payload:666 })} >赋值</button>
      { /* 把dispatch 和 state 传递给子组件  */ }
      <MyChildren  dispatch={ dispatchNumbner } State={{ number }} />
   </div>
}
```

**3.useTransition**

如果一次事件触发有多个优先级任务

比如tab切换：1.tab标签样式 2.tab content内容切换

明显tab content优先级低，可以优雅的使用useTransition在数据还没有返回的时候有loading界面-->让startTransition里面的setState任务优先级滞后

### 2.执行副作用

**1.useEffect**

为什么叫做副作用-->相当于纯函数的副作用，和外部变量有了交互

在React中-->不是state,props的变量影响

问题：到底什么时候执行？DOM后？是渲染后再去setState?

解答：是在真实DOM生成并挂载之后再去useEffect，类比didMount,didUpdate，理解的时候可以带上生命周期图

return的清除作用时机是：

1.render-->clear上一次-->这一次新的effect(同时把这一次的绑定上这一次的return)

2.组件销毁时候

**2.useLayoutEffect**

## immutable.js+memo浅比较的更新方案

总结起来就是想在对react组件进行性能优化时，需要监测state或props的变化来判断是否render，而怎么监测变化=>用浅比较，但浅比较存在更新对象属性时引用没变的问题，所以只要能解决这个问题，浅比较依然是好方案，因此immutable的出现解决的就是有变化就返回新引用，故而浅比较+immutable就是性能优化的利器，然后后面出现的Immer是比immutable更好的方案
