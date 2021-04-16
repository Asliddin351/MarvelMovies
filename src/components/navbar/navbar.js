import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import Backdrop from '../backdrop/backdrop'
import logo from '../../images/logo.jpg'

import './navbar.css'
import { FilmContext } from '../../context/films-context'



const links = [
    {
        name: 'Главная',
        url: '/',
        icon: 'home'
    },
    {
        name: 'Избранное',
        url: '/favourite',
        icon: 'heart',
        counter: true
    },
    {
        name: 'О нас',
        url: '/about',
        icon: 'info-circle'
        
    },
]

function Navbar() {

    

    const [films, actions] = useContext(FilmContext)

    
    const [visible, setVisible] = useState(false)

    const showNavbar = () => {
        setVisible(true);
    }

    const hideNavbar = () => {
        setVisible(false)
    }
    
    

    console.log(actions.count)
 

    return (
        <div className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <Link to={'/'} className='logo'><img src={logo} height='45' alt='Marvel'/></Link>
            
                
                    <button className='navbar-toggler' type='button' onClick={showNavbar}>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                  
                    {visible === true ? <Backdrop hide={hideNavbar} /> : null}

                    <ul className={`navbar__list ${visible ? 'navbar__list--show' : ''}`}>
                        
                        {links.map((link, index) => {
                            return(

                                <li key={index} className='navbar__item'>
                                    <Link to={link.url} className={`navbar__link ${link.counter ? `fav-link` : ''}`}  onClick={hideNavbar}>

                                        {link.counter ? <span className='bg-danger'>{films.count}</span> : null}

                                        <i className={`fas fa-${link.icon}`}></i>
                                        {link.name}
                                    </Link>
                                </li>
                            )

                        })}
                    </ul>
            
            </div>
        </div>
    )
}

export default Navbar