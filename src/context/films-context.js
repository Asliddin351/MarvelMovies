import { useState, createContext } from 'react';
import data from '../data/data.json'

export const FilmContext = createContext()


export const FilmContextProvider = (props) => {
    
    const [films, setFilms] = useState(data || [])

   
     
    

    
    const actions = {
        clearFilms: () => {
            setFilms([])
        }
      
    }


    return (
        <FilmContext.Provider value={[films, actions]}>
            {props.children}
        </FilmContext.Provider>
    )
}