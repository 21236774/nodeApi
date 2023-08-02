const mysql = require("mysql")

let mysqlInstance = null

const getMysqlInstance = () => {
  if (!mysqlInstance) {
    mysqlInstance = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "***",
      password: "***",
      database: "***",
    })
    
    mysqlInstance.connect((err) => {
      if (err) {
        console.error("数据库连接失败：", err);
      } else {
        console.log("成功连接到数据库！");
      }
    })    
  }
  return mysqlInstance
}



module.exports = getMysqlInstance()