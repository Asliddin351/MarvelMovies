import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
const Layout = (props) => {
	return (
		<div>
			<header>
				<Navbar/>
			</header>
			<main>
				{props.children}
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default Layout
