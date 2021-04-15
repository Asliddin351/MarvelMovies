import React, {useContext} from 'react'
import Card from '../components/card/card'
import HomePageSlider from '../components/homePage-slider/homePage-slider'
import { FilmContext } from '../context/films-context'
// import data from '../data/data.json'




const HomePage = () => {
	const [films] = useContext(FilmContext)
	
	return (
		<>
			<HomePageSlider />
			<div className='container'>
				<h2>Список фильмов</h2>
				<div className='row mb-4'>
					<div className='col-12 col-md-6 col-lg-6'>
						{films.map(film=>{
							return <Card key={film.ID} film={film}/>
							
						})}
					</div>
				</div>
			</div>	
		</>
	)
}

export default HomePage
