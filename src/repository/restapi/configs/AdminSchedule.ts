import { schedule } from 'node-cron'

class AdminScheduleConfig {

    private unidade = "Minute"
    private params = 2

    public job(temp: Number, func: Function) {

        switch (this.unidade){

            case "Minute":
               temp = this.params
            break;

            case "Hours":
               temp = this.params*60
            break;

            case "Day":
                temp = this.params*1440
            break;
            
            case "Month":
                temp = this.params*43800
            break;
            
            default: return console.log("invalid unit, please check")

        }

        console.log("TEMP", temp)

        return schedule(`*/${temp} * * * *`, async () => {
            
            console.log(` The schedule is running every ${temp} Hours/Day/Month/Minute`)
            return await func()

        })
    }
}

const adminScheduleConfig = new AdminScheduleConfig()

export default adminScheduleConfig