const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/WeshineTech"


const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;