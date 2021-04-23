
import { useContext } from 'react'
import HomePageSlider from '../components/homePage-slider/homePage-slider'
import { FilmContext } from '../context/films-context'

import FileList from '../components/film-list/film-list'


const HomePage = () => {

	const films  = useContext(FilmContext)[0]
	


	return (
		<>
			<HomePageSlider />
			<div className='container'>
				<h2 className='mb-5'>Список фильмов</h2>
				<div className='row mb-4'>

					{films.map(el=>{
						return <FileList key={el.ID} film={el} />
					})}
				</div>
			</div>	
		</>
	)
}

export default HomePage
