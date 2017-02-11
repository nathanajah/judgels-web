import { REGISTER_SUCCESS } from './session'

const form = {
    register: (state, action) => {
        switch (action.type) {
            case REGISTER_SUCCESS:
                return undefined
            default:
                return state
        }
    }
}

export default form
