import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import { FilmContextProvider } from './context/films-context'

ReactDOM.render(
	<BrowserRouter>
		<FilmContextProvider>
			<App/>
		</FilmContextProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
