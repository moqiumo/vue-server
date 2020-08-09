# 后台管理系统API文档

## 1.API文档说明

###### 	1.1接口基准地址：http://127.0.0.1:8080/tga/

###### 	1.2后台已经开启跨域

###### 	1.3只有登陆需要验证token

###### 	1.4API格式为{code:"",msg:"",data:""}

### 2.登陆

##### 2.1登陆验证接口

​	请求路径： login

​	请求方法： post

​	请求参数

| 参数名称 | 参数说明 | 备注     |
| -------- | -------- | -------- |
| username | 用户名   | 不能为空 |
| password | 密码     | 不能为空 |

响应数据

```
{
    "code": 200,
    "msg": "登录成功",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjEyMzQ1NiIsImlkIjoxLCJleHAiOjE1OTY5NjI5MTksImlhdCI6MTU5Njk2MTExOSwidXNlcm5hbWUiOiJhZG1pbiJ9.mhKYK0WDtI4iqL3mhNoBbAnMhml-zaWbvfi_Mac96T0"
    }
}
```

### 3.菜单栏

##### 3.1左侧菜单栏接口

​	请求路径： menus

​	请求方法： get

响应数据

```
{
    "code": 200,
    "msg": "查找菜单成功！",
    "data": [
        {
            "id": 101,
            "authName": "账号管理",
            "children": "tga"
        },
        {
            "id": 102,
            "authName": "需求管理",
            "children": "tga"
        },
        {
            "id": 103,
            "authName": "业务需求",
            "children": "tga"
        }
    ]
}
```

