const express = require('express')

const router = express.Router();
import {
    CreateProduct,
    SingleProduct,
    AllProduct,
    UpdateProduct,
    DeleteProdcut
} from '../Controller/Product.controller'



//Create Product
router.post('/', CreateProduct);

//View All Product
router.get('/', SingleProduct);

//View Single Product
router.get('/:id', AllProduct);

//Update Single Product
router.put('/:id', UpdateProduct);

//Update Single Product
router.patch('/:id', UpdateProduct);

//Delete Single Product
router.delete('/:id', DeleteProdcut);


module.exports = router