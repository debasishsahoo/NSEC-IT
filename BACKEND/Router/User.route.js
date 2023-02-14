const express = require('express')

const router = express.Router();

import { CreateProduct, SingleProduct, AllProduct } from '../Controller/Product.controller'



//Create Product
router.post('/', CreateProduct);

//View All Product
router.get('/', AllProduct);

//View Single Product
router.get('/:id', SingleProduct);

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


module.exports = router