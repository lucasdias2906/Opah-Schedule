
import axios from 'axios';
import AdminScheduleConfig from '../configs/AdminSchedule'

import User from '../../models/DevSchema'

const key = "AIzaSyCi40KsvfAENVTteNcHVACNRKzAFUhbAxI"

class AddressCompanyController {

    static async update() {

        AdminScheduleConfig.job(0, async () => {

            const users: any = await User.find()

            console.log(users)

            await new Promise(resolve => {

                users.forEach(async (user: any, index: number) => {

                    if (!user.lat || !user.lng) {

                        const address = user.address[0].type_street + " " + user.address[0].street

                        const addressUrl = encodeURIComponent(address)

                        const apiRes = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${key}`)

                        if(apiRes.data?.results[0].formatted_address.includes(user.address[0].city && user.address[0].neighborhood)){

                            const { location } = apiRes.data?.results[0].geometry
    
                            user.location = location

                            console.log(location)
    
                            const objteste = await { ...{ _id: user.id }, ...location, payload: { ...apiRes.data?.results[0] } }
    
                            await User.findOneAndUpdate({ _id: user.id }, objteste)
    
                            if (index === users.length) {
                                resolve(true)
                            }
    
                            return console.log("Companies updated successfully")

                        } else {

                            return console.log("Business address information")
                            
                        }

                    }
                    
                    return console.log("No businesses have been updated")
                })

            });
        });

    }

}


export default AddressCompanyController;


