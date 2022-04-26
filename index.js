const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()


// Middleware
app.use(express())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Crud server is running');
})