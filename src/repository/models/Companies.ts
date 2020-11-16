import mongoose from 'mongoose';

const CompaniesSchema = new mongoose.Schema({

    cnpj: Number,
    razão_social: String,
    lat: Number,
    lng: Number,
    payload: Object

});

export default mongoose.model("companies", CompaniesSchema, "companies");