import api from '../../utils/api'
import { showLoading, hideLoading } from "react-redux-loading-bar";

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    ADD_THREAD: 'ADD_THREAD',
}

function receiveThreadsActionCreator(threads) {
    return {
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads
        },
    }
}

function addThreadActionCreator(thread) {
    return {
        type: ActionType.ADD_THREAD,
        payload: {
            thread
        },
    }
}

function asyncReceiveThreads() {
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            const threads = await api.getThreads()
            dispatch(receiveThreadsActionCreator(threads))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

function asyncAddThread({ title, body, category }) {
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            const thread = await api.addThread({ title, body, category })
            dispatch(addThreadActionCreator(thread))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

export {
    ActionType,
    receiveThreadsActionCreator,
    addThreadActionCreator,
    asyncReceiveThreads,
    asyncAddThread,
}
