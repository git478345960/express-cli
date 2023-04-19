const mongoose = require('mongoose')
const {mongopath} = require('../config/config.default')
async function main(){
    await mongoose.connect(mongopath)
}

main().then(res => {
    console.log('mongo链接成功')
}).catch(err => {
    console.log('链接失败', err)
})  

module.exports = {
    User: mongoose.model('User',require('./userModel'))
}