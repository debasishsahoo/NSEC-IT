const express = require('express')
const ProductRouter = require('./Router/Product.router')

const PORT = 5000

const app = express()


//! Demo Url: https://localhost:5000/api/product/

app.use('/api/product', ProductRouter)



// app.get('/', ((request, response) => {
//     response.send('GET() is Invoked')
// }));
// app.post('/', ((request, response) => {
//     response.send('POST() is Invoked.')
// }));
// app.put('/', ((request, response) => {
//     response.send('PUT() is Invoked.')
// }));
// app.patch('/', ((request, response) => {
//     response.send('PATCH() is Invoked.')
// }));
// app.delete('/', ((request, response) => {
//     response.send('DELETE() is Invoked.')
// }));



app.listen(PORT, () => {
    console.log('Application is Running on 5000.')
})