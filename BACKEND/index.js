const express = require('express')

const app = express()


app.get('/', ((request, response) => {
    response.send('GET() is Invoked')
}));

app.post('/', ((request, response) => {
    response.send('POST() is Invoked.')
}));
app.put('/', ((request, response) => {
    response.send('PUT() is Invoked.')
}));
app.patch('/', ((request, response) => {
    response.send('PATCH() is Invoked.')
}));

app.delete('/', ((request, response) => {
    response.send('DELETE() is Invoked.')
}));



app.listen(5000, () => {
    console.log('Application is Running on 5000.')
})