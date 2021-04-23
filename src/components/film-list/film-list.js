import React from 'react'
import Card from '../card/card';




const FilmList = ({film}) => {
    
   
    return (
        <div className='col-12 col-md-6 col-lg-6'>
            <Card film = {film}  />
        </div>
    )
}
export default FilmList;
