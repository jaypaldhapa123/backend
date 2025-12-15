const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected successfull");
    }catch(err){
        console.log("faild to connect mongodb", err);
    }
}

module.exports = connectDB;