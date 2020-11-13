
import axios from 'axios';
import AdminScheduleConfig from '../configs/AdminSchedule'

import AddressCompany from '../../models/DevSchema'

const key = "AIzaSyCi40KsvfAENVTteNcHVACNRKzAFUhbAxI"

class AddressCompanyController {

    static async update() {

        AdminScheduleConfig.job(0, async () => {

            const addressCompanys: any = await AddressCompany.find()

            await new Promise(resolve => {

                addressCompanys.forEach(async (addressCompany: any, index: number) => {


                    if (!addressCompany.lat || !addressCompany.lng) {

                        const address = addressCompany.type_street + " " + addressCompany.street

                        console.log(address)

                        console.log("CITY", addressCompany.city)
                        console.log("BAIRRO", addressCompany.neighborhood)


                        const addressUrl = encodeURIComponent(address)
                        
                        const apiRes = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${key}`)

                        console.log(apiRes.data?.results[1].formatted_address)
                        
                        if(apiRes.data?.results[1].formatted_address.includes(addressCompany.city) & apiRes.data?.results[1].formatted_address.includes(addressCompany.neighborhood)){

                            const { location } = apiRes.data?.results[0].geometry
    
                            addressCompany.location = location
    
                            const objteste = await { ...{ _id: addressCompany.id }, ...location, payload: { ...apiRes.data?.results[0] } }
    
                            await AddressCompany.findOneAndUpdate({ _id: addressCompany.id }, objteste)
    
                            if (index === addressCompanys.length) {
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


export default AddressCompanyController;


