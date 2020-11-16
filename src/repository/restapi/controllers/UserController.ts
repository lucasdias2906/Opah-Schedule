
import axios from 'axios';
import AdminScheduleConfig from '../configs/AdminSchedule'

import User from '../../models/DevSchema'
import Companies from '../../models/Companies'


const key = "AIzaSyCi40KsvfAENVTteNcHVACNRKzAFUhbAxI"

class AddressCompanyController {

    static async update() {

        AdminScheduleConfig.job(0, async () => {

            const users: any = await User.find()
            await Companies.find()

            await new Promise(resolve => {

                users.forEach(async (user: any, index: number) => {

                        const address = user.type_street + " " + user.street

                        console.log(address)
                        const addressUrl = encodeURIComponent(address)

                        const apiRes = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${key}`)

                        if(apiRes.data?.results[0].formatted_address.includes( user.city && user.neighborhood)){

                            const { location } = apiRes.data?.results[0].geometry
    
                            user.location = location

                            const objteste = await { ...{ cnpj: user.company }, ...location, payload: { ...apiRes.data?.results[0] } }
    
                            await Companies.findOneAndUpdate({ cnpj: user.company }, objteste)
    
                            if (index === users.length) {
                                resolve(true)
                            }
    
                            return console.log("Companies updated successfully")

                        } else {

                            return console.log("Business address information")
                            
                        }
                })

            });
        });

    }

}


export default AddressCompanyController;


