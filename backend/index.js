const express = require('express')
const server = express()
const info = require('../components/data/info.json')

server.get('/info', (req, res) => {
    return res.json(info)
})

server.listen(3000, () =>{
    console.log('alou')
})
