const {body} = require('express-validator')
const validator = require('./errorBack')
const {User} = require('../../model/index')
module.exports.register = validator([
    body('username')
    .notEmpty().withMessage('用户名不能为空').bail()
    .isLength({min:5,max:15}).withMessage('用户名长度需要在5-15之间'),
    body('email')
    .notEmpty().withMessage('邮箱不能为空').bail()
    .isEmail().withMessage('邮箱格式部不正确').bail()
    //自定义验证
    .custom(async val => {
        const emailValidates = await User.findOne({email: val})
        if (emailValidates) {
            return Promise.reject('邮箱已被注册')
        }
    }),
    body('phone')
    .notEmpty().withMessage('手机不能为空').bail()
    //自定义验证
    .custom(async val => {
        const emailValidates = await User.findOne({phone: val})
        if (emailValidates) {
            return Promise.reject('手机号已被注册')
        }
    })
])

module.exports.login = validator([
    body('email')
    .notEmpty().withMessage('邮箱不能为空').bail()
    .isEmail().withMessage('邮箱格式部不正确').bail(),
    body('password')
    .notEmpty().withMessage('密码不能为空').bail()
   
])