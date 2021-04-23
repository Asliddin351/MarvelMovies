
import React, {useContext} from 'react'
import { FilmContext } from './../context/films-context';
import { useParams, Link } from "react-router-dom"
import Card from '../components/card/card'

const FilmPage = () => {

	const films = useContext(FilmContext)[0]

    const params = useParams()

	

	
	const findeFilm = films.find(function (film) {
        if (film.ID === params.id) {
            return film
        }
		
        return false
    })
	

	


	

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-xs-12 col-lg-8 film-page__card-body'>
						<Card key={findeFilm.ID} film={findeFilm}/>
						
						
							{films.map(el=>{
								if (el.ID === params.id) {
								return (
									<div key={el.ID} className='card-footer'>
										<h5 className='mt-2 mb-4'>Краткое описание</h5>
										<p className='mt-2 mb-4'>{el.Plot}</p>
										<h5 className='mt-2 mb-5'>Дополнительная информация:</h5>
										<ul className='info-list'>
											<li> <b> Оценки: </b> {`${el.Ratings[0].Source}: ${el.Ratings[0].Value};  ${el.Ratings[1].Source}: ${el.Ratings[1].Value};  ${el.Ratings[2].Source}: ${el.Ratings[2].Value}`}</li>
											<li> <b> Актёры: </b>  {el.Actors}</li>
											<li> <b> Награды: </b>  {el.Awards}</li>
											<li> <b> Кассовый сбор: </b> {el.BoxOffice}</li>
											<li> <b> DVD: </b> {el.DVD}</li>
											<li> <b> Продюссер: </b>  {el.Director}</li>
											<li> <b> Жанр: </b>  {el.Genre}</li>
											<li> <b> Языки: </b>  {el.Language}</li>
											<li> <b> Производство: </b>  {el.Production}</li>
											<li> <b> Рейтинг просмотра: </b>  {el.Rated}</li>
											<li> <b> Дата выхода: </b>  {el.Released}</li>
											<li> <b> Тип: </b>  {el.Type}</li>
											<li> <b> Сценаристы: </b>  {el.Writer}</li>
										</ul>
									</div>
								)}else {return null}
							})}
				</div>

				<div className='col-xs-12  col-lg-4 other-films'>
					<h5>Другие фтльмы:</h5>
						{films.map(element=>{
							return (
								<div key={element.ID} className='mini-card mb-2 mt-2'>
									<img className='mini-card__poster' src={element.Poster}  alt={element.Title}/>
									<div className='p-2'>
										<Link  to={`/film/` + element.ID} className=' mb-2 d-inline-block'>{element.Title}</Link>
										<p className='mb-0'>Год выпуска: {element.Year}</p>
										<p className='mb-0'>Длительность: {element.Runtime}</p>
									</div>

								</div>
							)
						})}
				</div>
			</div>
		</div>	
	)
}

export default FilmPage



