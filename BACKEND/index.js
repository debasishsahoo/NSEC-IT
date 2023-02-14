const express = require('express')
const ProductRouter = require('./Router/Product.router')
const UserRouter = require('./Router/User.route')

const PORT = 5000

const app = express()


//! Demo Url: https://localhost:5000/api/product/

app.use('/api/product', ProductRouter)
app.use('/api/user', UserRouter)



app.listen(PORT, () => {
    console.log('Application is Running on 5000.')
})