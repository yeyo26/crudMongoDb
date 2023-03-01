import {connect} from "mongoose";

// (async()=>{
//     const db= await connect("mongodb://localhost:27017/crud-mongo")
// console.log('DB connected to ', db.connection.name);
// })

const connectDB = async () => {
    try {

      const db = await connect('mongodb://localhost:27017/crud-mongo')

      const url = `${db.connection.host}:${db.connection.port}`
      console.log('DB is conected in' , url);

    } catch (error) {
      console.log(`error: ${error.message}`);
      process.exit(1)

    }
};
export default connectDB
