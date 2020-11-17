import mongoose from 'mongoose';

const AddressCompanySchema = new mongoose.Schema({
    company: Number, 
    tipo_logradouro: String,
    logradouro: String,
    cidade: String,
    bairro: String,
    uf: String,
});

export default mongoose.model("address", AddressCompanySchema, "address");
