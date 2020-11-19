
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

                    const cepAddress = addressCompany.CEP
                    
                    const cepUrl = cepAddress.slice(0, 5) + "%20" + cepAddress.slice(5,9)
                    
                    const apiRes: any = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cepUrl}&key=${key}`).catch(error => console.log("ERROR API", error))
                    
                    const { location } = apiRes.data?.results[0].geometry;
                    
                    const id = addressCompany._id.substr(8, 20)
                    // aqui estou copiando o objeto e falando que a LAT: recebe a LAT que esta dentro de LOCATION, LONG: recebe o LONG que esta dentro de LOCATION
                    const objCompanies = await { ...{ CNPJ: id }, LAT: location.lat, LONG: location.lng }

                    await Companies.findOneAndUpdate({ CNPJ: id }, objCompanies)

                    if (index === addressCompanys.length) {
                        resolve(true)
                    }

                    return console.log("Atualizados com sucesso")

                })
            });
        });
    }
}


export default AddressCompanyController;


