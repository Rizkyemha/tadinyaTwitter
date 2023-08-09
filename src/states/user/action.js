import api from "../../utils/api"
import { showLoading, hideLoading } from "react-redux-loading-bar";

const ActionType = {
    RECEIVE_USER: 'RECEIVE_USER'
}

function receiveUserActionCreator({user}) {
    return {
        type: ActionType.RECEIVE_USER,
        payload: {
            user
        },
    }
}

function asyncRegisterUser({name, email, password}) {
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            await api.register({name, email, password})
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

export {
    ActionType,
    receiveUserActionCreator,
    asyncRegisterUser
}