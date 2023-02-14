const express = require('express')

const router = express.Router();

import {
    Createuser, Singleuser, Alluser, Updateuser, Deleteuser
} from '../Controller/User.Controller'




//Create Product
router.post('/', Createuser);

//View All Product
router.get('/', Alluser);

//View Single Product
router.get('/:id', Singleuser);

//Update Single Product
router.put('/:id', Updateuser);

//Update Single Product
router.patch('/:id', Updateuser);

//Delete Single Product
router.delete('/:id', Deleteuser);


module.exports = router