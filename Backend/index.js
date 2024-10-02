const express = require('express')
app = express()

//console.log prints to gitbash terminal
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//get req.body
const cors = require('cors')
app.use(cors())

require('dotenv').config({ path: './.env' });

const PORT = process.env.PORT || 3030;

app.use('/openai', require('./openai.route.controller.js'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
