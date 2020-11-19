import mongoose from 'mongoose';

const AddressCompanySchema = new mongoose.Schema({
    _id: String,
    company: String,
    CEP: String,
    TIPO_LAGRADOURO: String,
    LAGRADOURO: String,
    NUMERO: String,
    COMPLEMENTO: String,
    CIDADE: String,
    BAIRRO: String,
    UF: String,
    _class: String,
});

export default mongoose.model("adressCompany", AddressCompanySchema, "adressCompany");
