import mongoose, { Schema, Document } from "mongoose"; 
export interface IRequestCall extends Document { 
  name: string; 
  email: string; 
  phone: string; 
  age: number; 
  description: string; 
  timestamp: string; 
} 
const RequestCallSchema = new Schema<IRequestCall>( 
  { 
    name: { type: String, required: true }, 
    email: { type: String, default: "optional@gmail.com" }, 
    phone: { type: String, required: true }, 
    age: { type: Number, required: true }, 
    description: { type: String, required: true }, 
    timestamp: { type: String, required: true }, 
  }, 
  { timestamps: true } 
); 
export default mongoose.model<IRequestCall>("RequestCall", RequestCallSchema); 