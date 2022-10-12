const mongoose = require('mongoose')


const viodesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    videoLink: {
        type: String,
        required: true,
    },
    thumbnail:{
        type:String,
        required:true
    },
    tags:{
        type:Array,
        required:false
    }

})

module.exports = mongoose.model('Videos',viodesSchema)