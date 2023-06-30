# Higgs实习

1.权益RBAC设计+Auth组件设计配合（权限）
2.组织架构TreeUtil
3.登录，node的CRUD+OIDC(OAuth2)+中间件
4.全局错误的处理，前端响应拦截

> 单点登录OIDC使用+nodejs中间件
OIDC原理+openid的npm库的keycloak那几个方法+公domain的cookie实现直接登录  

- 原理：
OIDC在OAuth2.0资源授权的基础上加了用户认证，access_token+id_token，资源，用户解耦,实际上我只用了access_token  
流程：获取Authing页面-->用户名密码提交（同时携带code_challenge）-->登录返回code-->code提交去换取token（同时携带code_verifier）
退出:获取logout页面推出，keycloak,token失效
PKCE:确保code是在这个流程中获得的
- 实现.higgsasset.com直接登录，将cookie保存在.higgsasset.com这个域名下
- npm库

- node中间件


> RBAC使用+HOC组件

> 组织架构数组转树

> 文件上传（各种类型）+pdf,图片预览
