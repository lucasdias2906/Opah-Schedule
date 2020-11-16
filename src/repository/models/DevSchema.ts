import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

    company: Number, 
    type_street: String,
    street: String,
    city: String,
    neighborhood: String,
});



export default mongoose.model("address", UserSchema, "address");
