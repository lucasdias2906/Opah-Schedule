import { Request } from 'express';

// CONTROLLER

class AdminJobTime {


   public adminJobTime(req: Request) {

        const { tempJob }: any = req.params

        if(tempJob != 1){
            
            //EXEMPLO
            return console.log(`o tempo é de ${tempJob} minutos`)
        }

        return console.log("TIME está na tempo padrão")

    }
}

const adminJobTime = new AdminJobTime()

export default adminJobTime