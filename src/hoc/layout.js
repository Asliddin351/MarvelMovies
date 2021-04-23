import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import './layout.css'


const Layout = (props) => {

	
	
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				{props.children}
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default Layout
