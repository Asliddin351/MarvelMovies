
import React, {useContext} from 'react'
import { FilmContext } from './../context/films-context';
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import Card from '../components/card/card'

const FilmPage = () => {
	const [films] = useContext(FilmContext)
    const params = useParams()

	

	

	const findeFilm = films.find(function (film, index) {
        if (film.ID == params.id) {
            return film
        }

        return false
    })


	

	return (
		<div className='container'>
			<div className='row'>
				<div className = 'col-xs-12 col-lg-8'>
					<Card film={findeFilm}/>
				</div>
				<div className = 'col-xs-12 col-lg-4'>
					
				</div>
			</div>
		</div>
	)
}

export default FilmPage
