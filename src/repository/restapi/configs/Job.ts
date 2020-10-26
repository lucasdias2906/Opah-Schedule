import { schedule } from 'node-cron'

class Jobs {

    public job(temp: Number, func: Function) {
        return schedule(`*/${temp} * * * *`, async () => {
            console.log("ENTROU NO JOB CONFIG")
            return await func()
        })
    }
}

const JobsSchedule = new Jobs()

export default JobsSchedule