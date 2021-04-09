import React from 'react'
import Navbar from '../components/navbar/navbar'
import HomePage from '../pages/home-page'

const Layout = (props) => {
	return (
		<div>
			<header>
				<Navbar/>
				<HomePage/>
			</header>
			<main>
				{props.children}
			</main>
			<footer>

			</footer>
		</div>
	)
}

export default Layout
