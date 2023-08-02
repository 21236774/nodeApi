define({ "api": [
  {
    "type": "get",
    "url": "/api/users/userInfo",
    "title": "获取用户信息",
    "name": "UsersInfo",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户的访问令牌</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/users/userInfo"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "登录",
    "name": "UsersLogin",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/users/login"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/logout",
    "title": "退出登录",
    "name": "UsersLogout",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户的访问令牌</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/users/logout"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/router",
    "title": "获取该用户的路由信息",
    "name": "UsersRouter",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户的访问令牌</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/users/router"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
