import { schedule } from 'node-cron'
// import Admintime from '../controllers/AdminTime'
import { EventEmitter } from 'events';

const emitter = new EventEmitter();

// só agenda

class AdminScheduler {

    public adminJob(temp: any, func: Function, url: any) {

        console.log("ENTROU NO ADMINJOB")

        emitter.on('scheduleTime', () => {

            let url_taskMap: any = {}
    
            const task = schedule(`*/${temp} * * * *`, async () => {
                console.log("ENTROU NO ADMINJOB CONFIG")
    
                url_taskMap[url] = task;
    
    
                if (temp != 1) {
    
                    console.log("ENTROU NO IF ADMIN-TIME")
    
                    url_taskMap[url].stop()
                    console.log("Deu o STOP")
    
                    url_taskMap[url].start()
                    console.log("Deu o START")
                }
    
                return await func()
                
            })
            
        });

    }
}

const adminScheduler = new AdminScheduler()

export default adminScheduler