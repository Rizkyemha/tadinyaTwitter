import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { setAuthActionCreator } from "../authUser/action";

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD'
}

function setIsPreloadActionCreator(isPreload) {
    return {
        type: ActionType.SET_IS_PRELOAD,
        payload: {
            isPreload
        },
    }
}

function asyncPreloadProcess() {
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            const authUser = await api.getOwnProfile()
            dispatch(setAuthActionCreator(authUser))
        } catch (error) {
            dispatch(setAuthActionCreator(null))
        }
        dispatch(hideLoading())
    }
}

export {
    ActionType,
    setIsPreloadActionCreator,
    asyncPreloadProcess
}