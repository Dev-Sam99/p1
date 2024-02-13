 import mongoose from "mongoose";

 import {DB_NAME} from "../constant.js";

 const connectDB = async () =>{
    try{
             const connectionInstance = await mongoose.connect(process.env.MONGODB_URI.replace("<test>",DB_NAME));
             console.log("momgo db connected on : " + `${connectionInstance.connection.host}`);
    }
    catch(err){
        console.log("momgo db connection failed: " + err);
        process.exit(1); //used to exit the current Node.js process with an exit code of 1, indicating that an error occurred. 
    }
 }

 export default connectDB;