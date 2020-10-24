import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import http from 'http'
 import routes from './routes'
import mongoose from 'mongoose'
// import swaggerUi from 'swagger-ui-express'
// import swaggerSpecs from './swagger.json'
 import '../../../models/DevSchema'
export default class ServerConfig {
    private server: express.Express;

    constructor() {
        this.server = express()

        this.dbConnection().then(success => console.warn("DB CONNECTION ")).catch(error => console.warn("DB CONNECTION ERROR",error))
        mongoose.set('useFindAndModify', false);
        this.server.use(express.json())
        this.server.use(express.urlencoded({ extended: false }))
        this.server.use(compression())
        this.server.use(helmet())

        this.server.use(cors())

         this.server.use(routes)

    }

    public createHTTP() {


        return http.createServer(this.server);
    }

    private dbConnection() {
        return new Promise((resolve, reject) => mongoose.connect("mongodb+srv://adminrules:jottajotta@cluster0.lfdp7.mongodb.net/testesssss?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(resolve).catch(reject)
        )

    }
}
