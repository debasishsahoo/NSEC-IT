const express = require('express')

const CreateProduct = (request, response) => {
    response.send('Product Created...')
}

const SingleProduct = (request, response) => {
    response.send('Single Product ')
}

const AllProduct = (request, response) => {
    response.send('All Product ')
}

const UpdateProduct = (request, response) => {
    response.send('Update Product ')
}
const DeleteProdcut = (request, response) => {
    response.send('Delete Product ')
}



module.exports = {
    CreateProduct, SingleProduct, AllProduct, UpdateProduct, DeleteProdcut
}