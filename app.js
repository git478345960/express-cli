const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')

app.use(express.json()) //解析客户端发送请求
// app.use(express.urlencoded()) //解析客户端发送请求
app.use(cors()) //支持跨域
app.use(morgan('dev')) //日志记录
app.use('/api/v1', router)
app.use(router)
app.use((req,res) => {
    res.status(404).send('404 Not Found.')
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
