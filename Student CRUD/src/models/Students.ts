import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  date_of_birth: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
}
)
export default model("student", studentSchema)