import * as actionTypes from '../constants/save'

const initialState = []

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE_UPDATE:
            return action.data
        case actionTypes.SAVE_ADD:
            return [action.data, ...state]
        case actionTypes.SAVE_REMOVE:
            return state.filter(item => {
                if (item.id !== action.data.id) {
                    return item
                }
            })
        default:
            return state
    }
}