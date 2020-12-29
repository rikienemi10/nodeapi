// mendefinisikan exprees

const express =  require('express')
const router = express.Router()
const Santri = require('../models/Santri')

// disini membutuhkan dua parameter (req dan res)
// router.get('/', (req, res)=> {
//     res.send('ini adalah example route')
// }) 


// untuk CREATE kita harus membuat models/schema
router.post('/', async (req, res) => {
    // di sini kita membuat variabel untuk menampung
    const santriPost = new Santri({
        name: req.body.name,
        alamat: req.body.alamat
    })

     // di bwah adalah perintah untuk membuat data
    try {
        const santri = await santriPost.save()
        res.json(santri)
    }catch(err){
        res.json({message: err})
    }
})

// Read / membaca data
router.get('/', async (req, res) => {
    try {
        const santri = await Santri.find()
        res.json(santri)
    } catch (err) {
        res.json({message: err})
    }
})

// Update dengan method pacth
router.put('/:santriId', async (req, res) => {
    try{
        // membuat variabel dengan reques dari parameter dan id
        const santriUpdate = await Santri.updateOne({_id: req.params.santriId}, 
            {
                name: req.body.name,
                alamat: req.body.alamat
            })
            res.json(santriUpdate)
    }catch (err){
        res.json({message: err})
    }
})

//delete data
router.delete('/:santriId', async (req, res) => {
    try{
        // membuat variabel dengan reques dari parameter dan id
        const santriUpdate = await Santri.deleteOne({_id: req.params.santriId})
            res.json(santriUpdate)
    }catch (err){
        res.json({message: err})
    }
})


// ini digunakan untuk mengirimkan ke app.js
module.exports = router