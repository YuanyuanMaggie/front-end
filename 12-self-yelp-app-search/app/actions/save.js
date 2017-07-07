import * as actionTypes from '../constants/save'

export function update(data) {
    return {
        type: actionTypes.SAVE_UPDATE,
        data
    }
}

export function add(item) {
    return {
        type: actionTypes.SAVE_ADD,
        data: item
    }
}

export function remove(item) {
    return {
        type: actionTypes.SAVE_REMOVE,
        data: item
    }
}