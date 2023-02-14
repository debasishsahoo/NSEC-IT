const express = require('express')

const Createuser = (request, response) => {
    response.send('user Created...')
}

const Singleuser = (request, response) => {
    response.send('Single user ')
}

const Alluser = (request, response) => {
    response.send('All user ')
}

const Updateuser = (request, response) => {
    response.send('Update user ')
}
const Deleteuser = (request, response) => {
    response.send('Delete user ')
}



module.exports = {
    Createuser, Singleuser, Alluser, Updateuser, Deleteuser
}