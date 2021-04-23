import {
    useState,
    createContext
} from 'react'
import {
    getFilmFormLocalstorage,
    saveFilmToLocalstorage
} from '../utils/filmsLocalStorege'

export const FavouriteContext = createContext()

export const FavouriteContextProvider = (props) => {

    const [fav, setFav] = useState(getFilmFormLocalstorage() || [])

   

    const actions = {


 

        isFav: (movie) => {
            return fav.find(el => el.ID === movie.ID);
        },


        addFavourite: (item) => {

            const newFavs = [item, ...fav]

            saveFilmToLocalstorage(newFavs)
            setFav(newFavs)

        },

        deleteFavourite: (id) => {
            const newFavs = fav.filter(el => {
                if (el.ID === id) {
                    return false
                } else {
                    return el
                }
            })
            setFav(newFavs)
            saveFilmToLocalstorage(newFavs)
        },

     
    }

    return (      
        <FavouriteContext.Provider value={[fav, actions]}>
            {props.children}
        </FavouriteContext.Provider>
    )
    
}