import { schedule } from 'node-cron'

let temp: any

// criar class adm
// criar os metodos
// implementar o OBSERVER



class Admin {

    public adminTemp(func: Function, url: any){

        var url_taskMap = []

        const task = schedule(`*/${temp} * * * *`, async () => {
            console.log("ENTROU NO JOB CONFIG")
            //Do some work
            return await func()

        })

        url_taskMap[url] = task;
        // for some condition in some code
        let my_job = url_taskMap[url];
        my_job.stop();

    }


}

export default Admin