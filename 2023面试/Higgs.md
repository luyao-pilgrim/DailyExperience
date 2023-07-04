# Higgs 实习

1.权益 RBAC 设计+Auth 组件设计配合（权限） 2.组织架构 TreeUtil 3.登录，node 的 CRUD+OIDC(OAuth2)+中间件 4.全局错误的处理，前端响应拦截

> 单点登录 OIDC 使用+nodejs 中间件

OIDC 原理+openid 的 npm 库的 keycloak 那几个方法+公 domain 的 cookie 实现直接登录

- 原理：
  OIDC 在 OAuth2.0 资源授权的基础上加了用户认证，access_token+id_token，资源，用户解耦,实际上我只用了 access_token  
  流程：获取 Authing 页面-->用户名密码提交（同时携带 code_challenge）-->登录返回 code-->code 提交去换取 token（同时携带 code_verifier）
  退出:获取 logout 页面推出，keycloak,token 失效
  PKCE:确保 code 是在这个流程中获得的
- 实现.higgsasset.com 直接登录，将 cookie 保存在.higgsasset.com 这个域名下
- npm 库

- node 中间件

> RBAC 使用+HOC 组件


> 组织架构数组转树

> 文件上传（各种类型）+pdf,图片预览

后端：ctx.request.files 接受;fs 模块相关方法,mkdir,readFileSync,writeFileSync;multipart 插件安装与配置  
前端：form-data,延申知识，请求的contentType

```javascript
const formData = new FormData();
file.forEach((item: any) => {
  formData.append("file", item?.originFileObj);
  formData.append("data", record.name);
});
```
