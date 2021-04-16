
import React, {useContext} from 'react'
import { FilmContext } from './../context/films-context';
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import Card from '../components/card/card'

const FilmPage = () => {

	const [films, actions] = useContext(FilmContext)

    const params = useParams()

	const fav = () =>{
		actions.favBgToggler()
	}
	

	const findeFilm = films.find(function (film, index) {
        if (film.ID == params.id) {
            return film
        }

        return false
    })


	const { ID, Poster, Title, Year, Runtime, Country, Director, imdbRating, bgfav } = findeFilm

	return (
		<div className='container'>
			<div className='row'>
				<div className = 'col-xs-12 col-lg-8'>
					{/* <Card film={findeFilm}/> */}
					<div className='card'>
						<div className='card-body'>
							<div className='right-top'>
                				<button onClick={()=>actions.favBgToggler} type='button' className={`right-top__btn ${bgfav ? 'bg-success' : 'bg-danger'}`}><i className="fas fa-heart"></i></button>
                				<div className='raiting bg-info'>{imdbRating}</div>
            				</div>
							<img className='poster' src={Poster} alt={Title}/>
								<h5 className='card-title'>
									{Title}
								</h5>
								<ul className='list-group list-group__flash'>
									<li className='list-group-item'>Год выпуска: {Year}</li>
									<li className='list-group-item'>Длительность: {Runtime}</li>
									<li className='list-group-item'>Страна: {Country}</li>
									<li className='list-group-item'>Режиссер: {Director}</li>
								</ul>
							</div>
						</div>
					</div>
				<div className = 'col-xs-12 col-lg-4'>
					
				</div>
			</div>
		</div>
	)
}

export default FilmPage
