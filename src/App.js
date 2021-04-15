import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

import Layout from './hoc/layout'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import FavouritePage from './pages/favourite-page'
import FilmPage from './pages/film-page'



function App() {
	return (
		<Layout>
			<Switch>
				<Route path={'/'} component={HomePage} exact/>
				<Route path={'/favourite'} component={FavouritePage}/>
				<Route path={'/about'} component={AboutPage}/>
				<Route path={'/film/:id'} component={FilmPage}/>

				<Redirect to={'/'} />
      		</Switch>
		</Layout>
	)
}

export default App
