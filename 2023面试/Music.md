# Vue音乐

> 评论区虚拟滚动

我们评论区做的是非等高的，关键：渲染哪几个，缓冲哪几个（通过scrollTop的高度）  
- 通过预测高度进行初始化列表，通过positions数组保存每个item的top,height,bottom  
- 请求真实数据后，根据真实height更新position数组  
- 关键：根据父元素监听scroll事件，scrollTop高度来判断获取当前渲染数组的上下index,上：第一个bottom大于scrollTop的，下：startIndex+渲染条数（screenHeight/预估高度）  
- 缓冲区：平滑滚动：通过在可视区域上方和下方提前渲染一些元素，缓冲区可以在用户滚动时提供平滑的滚动体验。当用户滚动到边界时，新的元素可以立即显示出来，避免了加载延迟或白屏现象，提升了滚动的流畅性  


> 懒加载

lazy-load组件

> 歌词

> service-worker

简介：基于web-woker技术的（h5新增的），独立于js主线程的woker线程，可以作为所有请求的代理，本质上也还是浏览器缓存，配合cachestorage主要用于离线弱网环境下的资源加载，并且可以主动去控制sw的缓存的版本   
重点：独立线程，网络代理  

问题：  
1.生命周期  
install-->installed-->activate-->activated  
install:静态的资源，确定性的下载  
installed:通知用户更新，使用postMessage通知skipwaiting  
activate: 删除旧版本的缓存  

2.sw版本更新的刷新问题  
监听onupdatefound-->用户确认传递postMessage-->skipwaiting-->controllerchange刷新

web-worker:大量计算场景  