import mongoose from 'mongoose';

const CompaniesSchema = new mongoose.Schema({
    CNPJ: String,
    RAZAO_SOCIAL: String,
    NOME_FANTASIA: String,
    DATA_ABERTURA: String,
    CAPITAL_SOCIAL: Number,
    NR_FILIAIS: Number,
    SIMPLES: String,
    DATA_OCORRENCIA_SIMPLES: String,
    IMPORTA: String,
    EXPORTA: String,
    CNAE: Number,
    CNAE_DESCRICAO: String,
    NAT_JUR: Number,
    NAT_JUR_DESCRICAO: String,
    PORTE: String,
    IND_COM_SERV: String,
    FAIXA_FATURAMENTO: String,
    FUNCIONARIOS: Number,
    SITE: String,
    LINKEDIN: String,
    EMAIL: String,
    LAT: Number,
    LONG: Number,
    STATUS: String,
    registerDate: String,
    createDate: String,
    updateDate: String,
    _class: String,

});

export default mongoose.model("companies", CompaniesSchema, "companies");