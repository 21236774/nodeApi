const express = require('express');
const router = express.Router();
const validateToken = require('../redis/validateToken') // 权限中间件
const { loginHandler, routesHandler, logoutHandler, userInfoHandler } = require('../api/users') // 用户相关接口

/**
 * @api {post} /api/users/login 登录
 * @apiName UsersLogin
 * @apiGroup Users
 * @apiParam {String} name 用户名
 * @apiParam {String} password 密码
 * @apiSampleRequest /api/users/login
 */
router.post('/login', loginHandler)

/**
 * @api {get} /api/users/router 获取该用户的路由信息
 * @apiName UsersRouter
 * @apiGroup Users
 * @apiHeader {String} Authorization 用户的访问令牌
 * @apiSampleRequest /api/users/router
 */
router.get('/router', validateToken, routesHandler)

/**
 * @api {get} /api/users/userInfo 获取用户信息
 * @apiName UsersInfo
 * @apiGroup Users
 * @apiHeader {String} Authorization 用户的访问令牌
 * @apiSampleRequest /api/users/userInfo
 */
router.get('/userInfo', validateToken, userInfoHandler)

/**
 * @api {get} /api/users/logout 退出登录
 * @apiName UsersLogout
 * @apiGroup Users
 * @apiHeader {String} Authorization 用户的访问令牌
 * @apiSampleRequest /api/users/logout
 */
router.get('/logout', validateToken, logoutHandler)

module.exports = router;