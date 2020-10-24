import mongoose from 'mongoose';

export default mongoose.connect("mongodb+srv://adminrules:jottajotta@cluster0.lfdp7.mongodb.net/testesssss?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(sucess=>console.warn("Access sucess db",new Date())).catch(error=>console.error("Connection with DB Falied =>",error))