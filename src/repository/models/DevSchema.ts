import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    type_street: String,
    street: String,
    city: String,
    neighborhood: String,
    lat: Number,
    lng: Number,
    payload: Object
});
export default mongoose.model("AddressCompany", UserSchema);
