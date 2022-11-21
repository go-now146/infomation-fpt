import { SET_STATE, UPDATE_STATE } from "./constant"

const initState = {}

function reducer(state, action) {
    switch (action.type) {
        case SET_STATE:
            return {
                ...action.payload
            }
        case UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer

