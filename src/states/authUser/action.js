import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER'
};

function setAuthActionCreator(authUser) {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            authUser
        },
    }
}

function unsetAuthActionCreator() {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            authUser: null,
        },
    }
}

function asyncSetAuthUser({ email, password }) {
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            const token = await api.login({ email, password })
            api.setAccessToken(token)
            const authUser = await api.getOwnProfile()

            dispatch(setAuthActionCreator(authUser))
            alert('Berhasil Login')
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

function asyncUnsetAuthUser(){
    return (dispatch) => {
        dispatch(unsetAuthActionCreator())
        api.setAccessToken('')
    }
}

export {
    ActionType,
    setAuthActionCreator,
    unsetAuthActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser
}