import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/authentication`)
        console.log('MongoDb Connect Successfully');
        
    } catch (error) {
        console.log('Mongodb Connection Error',error);
        
    }
}

export default connectDB