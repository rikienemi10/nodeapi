const mongoose = require('mongoose')

// membuat function yang menggambil dari mongoose
const SantriSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true
     },
     alamat: {
         type: String,
        required: true
     },
     tglTerdaftar: {
         type: Date,
         default: Date.now
     }
})
// di atas rest api untuk ke db
// di bawah mengambil data dari santrischema ke Routes Santri
module.exports = mongoose.model('Santri', SantriSchema)