
import axios from 'axios';
import AdminScheduleConfig from '../configs/AdminSchedule'

import User from '../../models/DevSchema'

const key = "AIzaSyCi40KsvfAENVTteNcHVACNRKzAFUhbAxI"

class UserController {

    static async update(temp: any) {

        AdminScheduleConfig.job(0, async () => {

            const users: any = await User.find()

            await new Promise(resolve => {

                users.forEach(async (user: any, index: number) => {


                    if (!user.lat || !user.lng) {

                        const address = user.address[0].type_street + " " + user.address[0].street

                        console.log(address)

                        const addressUrl = encodeURIComponent(address)

                        const apiRes = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${key}`)

                        const { location } = apiRes.data?.results[0].geometry

                        user.location = location

                        const objteste = await { ...{ _id: user.id }, ...location, payload: { ...apiRes.data?.results[0] } }

                        await User.findOneAndUpdate({ _id: user.id }, objteste)

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


export default UserController;


