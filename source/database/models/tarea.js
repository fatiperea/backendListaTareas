import mongoose, { Schema } from "mongoose";

const tarea = new Schema({
  id: {String,unique:true},
  tareaSchema: { String, required: true, minLength: 3, maxLength: 20, unique: true }
});

const Tarea= mongoose.model('tarea',tareaSchema)

export default Tarea