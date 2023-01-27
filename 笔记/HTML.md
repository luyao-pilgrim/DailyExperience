# HTML

## <!DOCTYPE> 声明

告诉浏览器使用的是那个版本的HTML  

```html
<!DOCTYPE html>
```

就是代表使用的是HTML5  

## HTML5新特性

- canvas
- audio, video
- localstorage, sessionstorage
- 语义化的标签 nav, section, article, header, footer

## 行内元素和块元素

inline, block, inline-block

- 行内元素(a,span)不可以直接去设定宽高，一般由内容决定,padding,margin一般只有水平可以设置

- 块元素(div,p, ul, li, ol, h1~h6)标准文档流的，默认占据一行宽度100%，可设定宽高

- 行内块(img, textarea)不自动换行，可以设定宽高

## script标签的defer和async

- 默认情况下，浏览器同步加载脚本，所以会阻塞渲染->碰到script就会停下去搞script

- defer 异步请求脚本，等到HTML解析完毕再去加载，多个defer按在页面中出现的顺序
  
  ![](C:\Users\陆遥\Desktop\DailyExperience\笔记\images\2023-01-15-17-03-34-image.png)

- async 一样异步请求，但是请求成功直接去阻塞执行，且顺序按请求到的先后来
  
  ![](C:\Users\陆遥\Desktop\DailyExperience\笔记\images\2023-01-15-17-03-49-image.png)