import { useState, createContext } from 'react';
import { getFilmFormLocalstorage, saveFilmToLocalstorage, removeFilmFromLocalstorage } from '../utils/filmsLocalStorege';

export const FilmContext = createContext()


export const FilmContextProvider = (props) => {
    
    const [films, setFilms] = useState(getFilmFormLocalstorage() || [])

    
    const actions = {
        addFilm: (id) => {
           
        },
        savaToFavourite: ()=> {
            
        },

        deleteFavourite: ()=>{
            setFilms([])
            removeFilmFromLocalstorage()
        }
    }


    return (
        <FilmContext.Provider value={[films, actions]}>
                {props.children}
        </FilmContext.Provider>
    )
}