import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { receiveThreadsActionCreator } from "../threads/action";
import { receiveUsersActionCreator } from "../users/action";

function asyncUsersAndThreads() {
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            const threads = await api.getThreads()
            const users = await api.getUsers()
            dispatch(receiveThreadsActionCreator(threads))

            const filteredUser = threads.map((thread) => users.filter((users) => users.id === thread.ownerId))
            const concatUser = filteredUser.reduce((acc, curr) => acc.concat(curr), [])

            dispatch(receiveUsersActionCreator(concatUser))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}

export default asyncUsersAndThreads