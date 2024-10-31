const mongoose = require('mongoose');

const DbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Mongodb connected sucessfully');
    } catch (error) {
        console.log("error occured while connecting to mongodb",error);
        process.exit(1);
    }
}

module.exports = {DbConnect};