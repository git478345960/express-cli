const crypto = require('crypto')

// const d = crypto.createHash('md5').update('123').digest('hex')
// 添加前缀，比如"by"，可以避免用户密码被强制破解（撞库）
// console.log(d)
// digest加密算法
module.exports = str => {
    return crypto.createHash('md5').update('by'+ str).digest('hex')
}