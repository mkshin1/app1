const express = require('express')

const { MongoClient } = require('mongodb');

const app = express()

let port = 8000

app.get('/', (req,res) => {
    res.send('testing')
})




app.listen(port, () => {
    console.log('server is running on ' + port)
})