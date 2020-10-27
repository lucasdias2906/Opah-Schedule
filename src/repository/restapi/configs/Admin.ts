import { schedule } from 'node-cron'
import Admintime from '../controllers/AdminTime'


class AdminScheduler {

    private tempJob = 1

    public adminJob(temp: any, func: Function, url: any) {

        let url_taskMap: any = {}

        const task = schedule(`*/${temp} * * * *`, async () => {
            console.log("ENTROU NO ADMINJOB CONFIG")
            //Do some work
            url_taskMap[url] = task;

            if (temp != this.tempJob) {

                Admintime.adminJobTime

                console.log("ENTROU NO IF ADMIN")

                url_taskMap[url].stop()
                console.log("Deu o STOP")

                url_taskMap[url].start()
                console.log("Deu o START")

            }

            return await func()
        })
        // for some condition in some code
    }
}

const adminScheduler = new AdminScheduler()

export default adminScheduler