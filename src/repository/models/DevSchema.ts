import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    address: [{
        street: String,
    }],
    lat: Number,
    lng: Number,
    payload: Object
});
export default mongoose.model("User", UserSchema);
