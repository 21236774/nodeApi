const connection = require('../mysql')
const { generateToken, getRouteTree } = require('../hooks/utlis')
const redis = require('../redis')

// 登录接口逻辑
const loginHandler = (req, res) => {
  const { name = '', password = '' } = req.body
  if(!name || !password) res.json({ code: 1004, msg: '请输入完整的账号密码', data: [] })
  const sql = `SELECT * FROM user WHERE userName = '${name}'`
  connection.query(sql, (error, results) => {
    if (error) res.json({ code: 1005, msg: '数据查询失败', data: [] });
    if (!results.length) res.json({ code: 1004, msg: '账号不存在', data: [] });
    if (results[0].password !== password) res.json({ code: 1004, msg: '密码错误', data: [] });
    const data = results[0] || {}
    const token = generateToken()
    redis.set(token, name, 'EX', 36000)
    data.token = token
    delete data.password
    res.json({ code: 200, msg: '成功', data });
  })
}

// 获取用户信息的逻辑
const userInfoHandler = async (req, res) => {
  const sql = `SELECT * FROM user WHERE userName = '${req.tokenName}'`
  connection.query(sql, (error, results) => {
    if (error) res.json({ code: 1005, msg: '数据查询失败', data: [] });
    const data = results[0] || {}
    data.token = req.token
    delete data.password
    res.json({ code: 200, msg: '成功', data });
  })
}

// 路由接口逻辑
const routesHandler = async (req, res) => {
  const sql = `SELECT * FROM routes WHERE adminId = '${req.tokenName}'`
  connection.query(sql, (error, results) => {
    if (error) res.json({ code: 1005, msg: '数据查询失败', data: [] })
    const data = getRouteTree(results)
    res.json({ code: 200, msg: '成功', data });
  })
}

// 退出登录的逻辑
const logoutHandler = async (req, res) => {
  await redis.del(req.token)
  res.json({ code: 200, msg: '退出成功' });
}


module.exports = {
  loginHandler,
  routesHandler,
  logoutHandler,
  userInfoHandler
}
