import mongoose, { Schema } from "mongoose";

const tarea = new Schema({
  id: {String,unique:true},
  tarea: { String, required: true, minLength: 3, maxLength: 20, unique: true }
});
