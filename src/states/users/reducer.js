import { ActionType } from "./action";

function usersReducer(users={}, action={}) {
    switch (action.type) {
        case ActionType.RECEIVE_USERS:
            return action.payload.users
        case ActionType.ADD_USERS:
            return [...(users.filter((users) => users.id !== action.payload.user.id)), action.payload.user]
        default:
            return users
    }
}

export default usersReducer