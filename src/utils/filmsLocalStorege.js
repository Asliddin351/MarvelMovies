export function getFilmFormLocalstorage() {
    return localStorage.getItem('name')
}

export function saveFilmToLocalstorage(filmName) {
    return localStorage.setItem('name', filmName)
}
