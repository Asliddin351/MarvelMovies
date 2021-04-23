
export function getFilmFormLocalstorage() {
    return JSON.parse(localStorage.getItem('favourite')) || [];
}

export function saveFilmToLocalstorage(favourite) {
    return localStorage.setItem('favourite', JSON.stringify(favourite));
}

export function removeFilmFromLocalstorage () {
    
    return localStorage.removeItem('favourite')
}










// export function isFavourite (favObj) {
//     let fav = getFilmFormLocalstorage();
//     return fav.find(el => el.ID == favObj.ID) != null;
// }



// let favList = getFilmFormLocalstorage();
// favList.push(favourite);