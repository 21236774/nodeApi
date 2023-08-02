const redis = require('./index')

const validateToken = async (req, res, next) => { // 中间件判断是否传递正确token
  const token = req.headers?.authorization || '' // 获取token
  if (!token) {
    return res.status(401).json({ msg: '权限异常', data: 401 });
  }
  const isToken = await redis.get(token)
  if(!isToken) {
    return res.status(401).json({ msg: '权限异常', data: 401 });
  }
  // 验证通过的情况下，继续执行下一个中间件或路由处理函数
  req.token = token
  req.tokenName = isToken
  next();
}

module.exports = validateToken