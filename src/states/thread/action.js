import api from '../../utils/api'
import { showLoading, hideLoading } from "react-redux-loading-bar";

const ActionType = {
    RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
    ADD_COMMENT: 'ADD_COMMENT',
}

function receiveDetailThreadActionCreator(thread) {
    return {
        type: ActionType.RECEIVE_DETAIL_THREAD,
        payload: {
            thread
        },
    }
}

function addCommentActionCreator(comment) {
    return {
        type: ActionType.ADD_COMMENT,
        payload: {
            comment
        },
    }
}

function asyncReceiveThreadDetail(threadId) {
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            const thread = await api.getThreadDetail(threadId)
            dispatch(receiveDetailThreadActionCreator(thread))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

function asyncAddComment({ content, threadId }) {
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            const comment = await api.addComment({ content, threadId })
            dispatch(addCommentActionCreator(comment))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

export {
    ActionType,
    receiveDetailThreadActionCreator,
    addCommentActionCreator,
    asyncReceiveThreadDetail,
    asyncAddComment,
}