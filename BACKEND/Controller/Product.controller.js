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


export default {
    CreateProduct, SingleProduct, AllProduct
}