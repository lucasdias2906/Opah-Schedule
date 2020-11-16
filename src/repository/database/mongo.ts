import mongoose from 'mongoose';

export default mongoose.connect("mongodb+srv://opah:lucaslucas@cluster0.mkspc.mongodb.net/opah?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(sucess=>console.warn("Access sucess db",new Date())).catch(error=>console.error("Connection with DB Falied =>",error))