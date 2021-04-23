import React, {useContext}  from 'react'
import { FavouriteContext } from '../context/favourite-context'
import FilmList from '../components/film-list/film-list'

const FavouritePage = (props) => {

	
	const fav = useContext(FavouriteContext)[0]



		
	return (
		<section>
			<div className='container mt-5'>
				<h2 className='mb-5'>Избранное</h2>
				<div className='row'>
					{fav.length ? fav.map(e=>{
						return <FilmList key={e.ID} film={e}/>
					}) : <p className='emp'>Список пуст</p>}
				</div>
				
			</div>
		</section>
	)
}

export default FavouritePage


