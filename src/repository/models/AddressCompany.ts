import mongoose from 'mongoose';

const AddressCompanySchema = new mongoose.Schema({
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
