
import axios from 'axios';
import AdminScheduleConfig from '../configs/AdminSchedule'
import AddressCompany from '../../models/AddressCompany'
import Companies from '../../models/Companies'

const key = "AIzaSyCi40KsvfAENVTteNcHVACNRKzAFUhbAxI"

class AddressCompanyController {

    static async update() {

        AdminScheduleConfig.job(0, async () => {

            const addressCompanys: any = await AddressCompany.find()
            await Companies.find()

            await new Promise(resolve => {

                addressCompanys.forEach(async (addressCompany: any, index: number) => {

                    const address = addressCompany.tipo_logradouro + " " + addressCompany.logradouro

                    console.log("ENDEREÇO", address)

                    const addressUrl = encodeURIComponent(address)

                    const apiRes = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${key}`)

                    // if (apiRes.data?.results[0].formatted_address.includes("- " + AddressCompany.uf)) {

                        console.log("Entrou no if")

                        const { location } = apiRes.data?.results[0].geometry;

                        const objCompanies = await { ...{ cnpj: addressCompany.company }, lat: location.lat, long: location.lng, payload: { ...apiRes.data?.results[0] } }

                        await Companies.findOneAndUpdate({ cnpj: addressCompany.company }, objCompanies)

                        if (index === addressCompanys.length) {
                            resolve(true)
                        }

                        return console.log("Companies updated successfully")

                    // } else {

                    //     return console.log("Business address information")

                    // }

                })

            });
        });

    }

}


export default AddressCompanyController;


