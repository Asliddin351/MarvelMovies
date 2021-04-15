import data from '../data/data.json'



export function getFilmFormLocalstorage() {
    return JSON.parse(localStorage.getItem('films'))
}

export function saveFilmToLocalstorage() {
    return localStorage.setItem('films', JSON.stringify(data))
}

export function removeFilmFromLocalstorage () {
    return localStorage.removeItem('films')
}
