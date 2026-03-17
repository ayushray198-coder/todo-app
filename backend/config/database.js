import mongoose from "mongoose"

const database = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MDB Connected");
        
    }catch(err){
        console.log("MDB Error:", err.message);
        process.exit(1)
        
    }
}

export default database