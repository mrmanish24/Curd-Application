import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log(`there is a error in connection to database ${error}`)
    }

}


export default connectMongoDB;