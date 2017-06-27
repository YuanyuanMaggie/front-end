import {get} from '../get'

export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}

export function getCatList() {
    const result = get('/api/homecategories')
    return result;
}

export function getCities() {
    const result = get('/api/citylist')
    return result;
}