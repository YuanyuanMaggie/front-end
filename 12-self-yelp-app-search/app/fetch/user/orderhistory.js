import { get } from '../get'
import { post } from '../post'

export function getOrderHistoryData(username) {
    const result = get('/api/orderhistory/' + username)
    return result
}

export function postComment(id, comment, star) {
    const result = post('/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    })
    return result
}