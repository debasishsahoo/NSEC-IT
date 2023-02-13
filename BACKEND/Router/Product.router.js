const express = require('express')

const router = express.Router();



//Create Product
router.post('/', ((request, response) => {
    response.send('Product Created...')
}));

//View All Product
router.get('/', ((request, response) => {
    response.send('All Product list')
}));

//View Single Product
router.get('/:id', ((request, response) => {
    response.send('Single Product ')
}));

//Update Single Product
router.put('/:id', ((request, response) => {
    response.send('Update Single Product ')
}));

//Update Single Product
router.patch('/:id', ((request, response) => {
    response.send('Update Single Product ')
}));

//Delete Single Product
router.delete('/:id', ((request, response) => {
    response.send('Delete Single Product ')
}));


export default router