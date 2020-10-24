
import { Request, Response } from 'express';
import axios from 'axios';
import JobConfig from '../configs/Job'


import User from '../../models/DevSchema'

const key = "AIzaSyCi40KsvfAENVTteNcHVACNRKzAFUhbAxI"

class DevController {

    static async update(req: Request, res: Response) {

        console.log("Entrou no UPDATE-CONTROLLER")

        
        
        JobConfig.job(1, async () => {
            const users: any = await User.find()
            console.log("USERSS", users)
            
            console.log("Só será executado em um minuto e repetirá (de 1 em 1 minutos) até ser desativado...");

            await new Promise(resolve => {

                users.forEach(async (user: any, index: number) => {

                    
                    if (!user.lat || !user.lng) {

                        console.log("Entroou na validacao do IF")

                        console.log("USER 1", user)

                        const addressUrl = encodeURIComponent(user.address[0].street)
                        
                        const apiRes = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${key}`)
    
                        const { location } = apiRes.data?.results[0].geometry

                        console.log("Entrou no IF")

                        user.location = location

                        const objteste = await { ...{ _id: user.id }, ...location, payload: { ...apiRes.data?.results[0] } }

                        await User.findOneAndUpdate({ _id: user.id }, objteste)

                        console.log("USER 2", user)

                        if (index === users.length) {
                            resolve(true)
                        }

                        return console.log("Usuaários atualizados com sucesso")
                    }

                    return console.log("Nenhuma atualização foi feita")
                })
                
            });
        });

    }

}


export default DevController;


