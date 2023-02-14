const express = require('express')

const router = express.Router();

module.exports = {
    Createuser, Singleuser, Alluser, Updateuser, Deleteuser
}





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