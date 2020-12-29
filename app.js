const bodyParser = require('body-parser')
const express = require('express')
const app = express()
// dibawah adalah untuk menambhkan package cross
const cors = require('cors')
// dibawah untuk koneksi monggose
const mongoose = require('mongoose')

//harus install dotenv
require('dotenv/config')


//Midlleware harus tambahkan package 
app.use(bodyParser()) 
app.use(cors())

// import dari routes
const santriRoutes = require('./routes/santri')

// route example
// app.get('/', santriRoutes ) sebelum di gunakan routenya 
app.use('/santri', santriRoutes)

// Connect To Db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: 
true, useUnifiedTopology: true })
// menyimpan di db
let db = mongoose.connection

// erorr
db.on('error', console.error.bind(console, 'Database Conection Erorr'))
// untuk callbank
db.once('open', () =>{
    console.log('Databases is Conected')
})

// listen
app.listen(process.env.PORT, () => { 
    console.log(`Server running in ${process.env.PORT}`)
})