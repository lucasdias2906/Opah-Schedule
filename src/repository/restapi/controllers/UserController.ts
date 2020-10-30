
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

                        console.log("CITY", user.address[0].city)
                        console.log("BAIRRO", user.address[0].neighborhood)


                        const addressUrl = encodeURIComponent(address)
                        
                        const apiRes = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${key}`)

                        console.log(apiRes.data?.results[1].formatted_address)
                        
                        if(apiRes.data?.results[1].formatted_address.includes(user.address[0].city) & apiRes.data?.results[1].formatted_address.includes(user.address[0].neighborhood)){

                            const { location } = apiRes.data?.results[0].geometry
    
                            user.location = location
    
                            const objteste = await { ...{ _id: user.id }, ...location, payload: { ...apiRes.data?.results[0] } }
    
                            await User.findOneAndUpdate({ _id: user.id }, objteste)
    
                            if (index === users.length) {
                                resolve(true)
                            }
    
                            return console.log("User updated successfully")

                        } else {

                            return console.log("Please check the address information")
                        }

                    }

                    return console.log("No user has been updated")
                })

            });
        });

    }

}


export default UserController;


