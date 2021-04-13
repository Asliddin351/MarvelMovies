import React from 'react'
import Card from '../components/card/card'
import HomePageSlider from '../components/homePage-slider/homePage-slider'

const HomePage = () => {
	return (
		<>
			<HomePageSlider />
			<div className='container'>
				<h2>Список фильмов</h2>
				<div className='row mb-4'>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
				</div>
				<div className='row'>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
				</div>
				<div className='row'>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
				</div>
				<div className='row'>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
				</div>
				<div className='row'>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
					<div className='col-12 col-md-6'>
							<Card />
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage
