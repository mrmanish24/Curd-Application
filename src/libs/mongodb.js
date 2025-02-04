import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://heymanish:ibfNMBEauxm5rKhN@cluster2.ifank.mongodb.net/curd_app");
        console.log("connected to MongoDB");
    } catch (error) {
        console.log(`there is a error in connection to database ${error}`)
    }

}


export default connectMongoDB;