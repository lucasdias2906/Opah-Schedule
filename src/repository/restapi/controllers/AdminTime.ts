import { Request } from 'express';
import { EventEmitter } from 'events';

const emitter = new EventEmitter();

// FAZ A ADMISTRACAO DO TEMPO DO JOB
// CONTROLLER

class AdminSchedulerTime {

    public adminTime(req: Request) {

        console.log("ENTROU NO ADMIN TIME")

        const funcJobTime = () => {

            console.log("ENTROU NA FUNC")

            const standardTime = 1
    
            const { tempSchedule }: any = req.params

            if (tempSchedule != standardTime) {
    
               console.log(`o tempo é de ${tempSchedule} minutos`)
            }
    
           console.log("ok")

        }

            setTimeout(() => {
        
                console.log("ENTROU NO TIME OUT")
    
                const algo = emitter.emit('scheduleTime', funcJobTime());

                console.log("algo", algo)

                console.log("passou pelo emitter")
        
            }, 2000);


    }
}

const adminSchedulerTime = new AdminSchedulerTime()

export default adminSchedulerTime
