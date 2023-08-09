import { ActionType } from "./action";

function threadDetailReducer(thread= null, action={}) {
    switch (action.type) {
        case ActionType.RECEIVE_DETAIL_THREAD:
            return action.payload.thread
        case ActionType.ADD_COMMENT:
            return {
                ...thread,
                comments: thread.comments.concat(action.payload.comment)
            }
        default:
            return thread
    }
}

export default threadDetailReducer