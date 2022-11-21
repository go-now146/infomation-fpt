import { UPDATE_STATE, SET_STATE } from "./constant"

export const updateState = payload => ({
    type: UPDATE_STATE,
    payload
})

export const setState = payload => ({
    type: SET_STATE,
    payload
})