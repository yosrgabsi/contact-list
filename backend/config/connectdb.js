const mongoose = require('mongoose')

const connectdb=async()=>{
    try{
await mongoose.connect('mongodb+srv://zakaryalabassi293:zakaryalabassi293@cluster0.jeo9iy3.mongodb.net/')
console.log('db is connected')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb