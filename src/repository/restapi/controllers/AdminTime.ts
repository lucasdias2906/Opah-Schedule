import { Request } from 'express';
import { EventEmitter } from 'events';

const emitter = new EventEmitter();

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
    
            console.log(tempSchedule)
            console.log("ok")
        }


        setTimeout(() => {

            console.log("ENTROU NO TIME OUT")

            emitter.emit('scheduleTime', funcJobTime);

        }, 2000);
    }
}

const adminJobTime = new AdminSchedulerTime()

export default adminJobTime
