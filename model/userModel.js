const mongoose = require('mongoose')
const md5 = require('../utils/md5')
const baseModel = require('./baseModel')
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        set: value => md5(value),
        select: false, //查询是是否返回
    },
    phone:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        defatul: null
    },
    ...baseModel,

})

module.exports = userSchema