import mongoose from 'mongoose';

const CompaniesSchema = new mongoose.Schema({
    cnpj: Number,
    razao_social: String,
    lat: Number,
    long: Number,
    payload: Object

});

export default mongoose.model("companies", CompaniesSchema, "companies");