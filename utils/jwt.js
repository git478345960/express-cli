const jwt = require('jsonwebtoken')
const {promisify} = require('util')
const toJwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)
const {uuid} = require('../config/config.default')
module.exports = {
    createToken: async userInfo => {
      return await toJwt(userInfo, uuid,{
            expiresIn: 60*60
        })
    },

    verifyToken: async (req, res, next) => {
        // 疑问1: 浏览器怎么将token自动放到请求头
        let token = req.headers.authorization
        token = token ? token.split('Bearer ')[1]: null
        if (!token) {
            res.status(402).json({error: '请传入token'})
        }
        try {
            let userInfo = await verify(token, uuid)
            console.log(userInfo)
            req.user = userInfo
            next()
        } catch (error) {
            res.status(402).json({error: '无效token'})
        }
    }

}














// const token = jwt.sign({foo: 'hello'}, '555')
// console.log(token)

// const jwtResult = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJoZWxsbyIsImlhdCI6MTY4MTc5OTMzMX0.JQEDrDzmYC_CoXTbQFEVKGfUPZMNVvdEp_YdPgAGq4s','555')
// console.log(jwtResult)
