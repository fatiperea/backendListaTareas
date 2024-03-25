import mongoose from "mongoose";

import "dotenv/config";

const mongoURI = process.env.MONGODB_URI;

console.log(mongoURI)

mongoose.connect(mongoURI)

const conexion=mongoose.connection

conexion.once('open',()=>{

    console.log('bd conectada')
})