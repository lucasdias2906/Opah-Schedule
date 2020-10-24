
import UserDTO from '../services/util/UserDTO'

import UserModel from '../repository/models/DevSchema'


const saveUser = (user: UserDTO) => {
    return new UserModel(user).save()
}

export default saveUser;
