require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())

const url = process.env.URI

mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const VideosRouter = require('./routes/videos')
app.use('/videos',VideosRouter)

const port = process.env.PORT||9000
app.listen(port, () => {
    console.log('Server started')
})