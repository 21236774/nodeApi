const { v4: uuidv4 } = require('uuid');

const generateToken = () => {
  const timestamp = new Date().getTime(); // 获取当前时间戳
  const uuid = uuidv4(); // 生成 UUID

  const token = `${uuid}-${timestamp}`; // 将时间戳和 UUID 进行组合

  return token;
}

const getRouteTree = (data) => {
  const tree = []
  const map = {}
  data.forEach((item) => {
    const meta = {
      title: item.metaTitle,
      auth: Boolean(item.mateAuth),
    }
    if(item?.mateIcon) meta.icon = item?.mateIcon
    map[item.id] = { ...item, meta, children: [] }
  })
  data.forEach((item) => {
    if (item.parentId !== null && map[item.parentId]) {
      map[item.parentId].children.push(map[item.id]);
    } else {
      tree.push(map[item.id]);
    }
  })
  return tree;
}

module.exports = {
  generateToken,
  getRouteTree
}