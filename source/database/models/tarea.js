import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  tarea: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
    unique: true
  },
});

const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;
