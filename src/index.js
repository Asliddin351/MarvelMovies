import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import { FilmContextProvider } from './context/films-context'
import { FavouriteContextProvider } from './context/favourite-context'

ReactDOM.render(
	<BrowserRouter>
		<FavouriteContextProvider>
			<FilmContextProvider>
					<App/>
			</FilmContextProvider>
		</FavouriteContextProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
