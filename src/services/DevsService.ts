import saveDev from '../usecase/saveDevs'
import UserDTO from '../services/util/UserDTO'


import User from '../repository/models/DevSchema'


class DevsService {
    public find = async () => {
        return await User.find();
    }

    public store = async (user:UserDTO) => {
        return await saveDev(user)
    }

}

const devService = new DevsService()

export default devService
