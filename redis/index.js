const Redis = require('ioredis')

let redisInstance = null
function getRedisInstance() { // 确保只连接一次
  if (!redisInstance) {
    redisInstance = new Redis({
      host: 'localhost',
      port: 6379,
      password: '***',
    });

    redisInstance.on('connect', () => {
      console.log('Redis 连接成功');
    });

    redisInstance.on('error', (error) => {
      console.error('Redis 连接失败', error);
    });
  }

  return redisInstance;
}

module.exports = getRedisInstance()