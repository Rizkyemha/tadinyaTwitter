const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS',
    ADD_USERS: 'ADD_USERS',
}

function receiveUsersActionCreator(users) {
    return {
        type: ActionType.RECEIVE_USERS,
        payload: {
            users,
        }
    }
}

function addUsersActionCreator(user) {
    return {
        type: ActionType.ADD_USERS,
        payload: {
            user,
        }
    }
}

export {
    ActionType,
    receiveUsersActionCreator,
    addUsersActionCreator,
}