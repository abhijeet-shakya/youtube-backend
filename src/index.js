import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

const port = process.env.PORT || 8080

connectDB()
.then(() => {
    app.listen(port, ()=>{`Swrver is running at port : ${port} `})
})
.catch((error)=>{
    console.log("MONGO db connection failed !!!!" , error)
})
