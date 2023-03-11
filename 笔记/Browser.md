# 浏览器

## 请求URL到页面现实过程

1.浏览器构建请求

2.查找浏览器缓存，若命中强缓存直接返回

3.DNS解析，域名-->IP

4.TCP链接，发送HTTP请求，接受HTTP响应

5.拿到资源进行浏览器渲染

## 简述浏览器渲染

1. 处理 HTML 并构建 DOM 树。
2. 处理 CSS 构建 CSSOM 树。
3. 将 DOM 与 CSSOM 合并成一个渲染树。
4. 根据渲染树来布局，计算每个节点的位置。
5. 调用 GPU 绘制，合成图层，显示在屏幕上。

![](C:\Users\陆遥\Desktop\DailyExperience\笔记\images\2023-02-01-10-52-41-image.png)

## 回流，重绘

另外一个叫法是重排，回流触发的条件就是:**对 DOM 结构的修改引发 DOM 几何尺寸变化的时候**,会发生`回流`过程。

具体一点，有以下的操作会触发回流:

1. 一个 DOM 元素的几何属性变化，常见的几何属性有`width`、`height`、`padding`、`margin`、`left`、`top`、`border` 等等, 这个很好理解。
2. 使 DOM 节点发生`增减`或者`移动`。
3. 读写 `offset`族、`scroll`族和`client`族属性的时候，浏览器为了获取这些值，需要进行回流操作。
4. 调用 `window.getComputedStyle` 方法。

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

## V8垃圾回收

## 浏览器缓存

强-->Cache-Control, 过期直接往下

协商-->现在一般ETag+if none match

## requestAnimationFrame

## XSS, CSRF
