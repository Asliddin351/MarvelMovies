import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Backdrop from '../backdrop/backdrop'
import logo from '../../images/logo.jpg'

import './navbar.css'



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
    const [count, setCount] = useState('0')

    const [visible, setVisible] = useState(false)

    const navbarToggle = () => {
       
        setVisible(!visible)
    }
 

    return (
        <div className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <Link to={'/'} className='logo'><img src={logo} height='45' alt='Marvel'/></Link>
            
                
                    <button className='navbar-toggler' type='button' onClick={navbarToggle}>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                  
                    {visible === true ? <Backdrop hide={navbarToggle} /> : null}

                    <ul className={`navbar__list ${visible ? 'navbar__list--show' : ''}`}>
                        
                        {links.map((link, index) => {
                            return(

                                <li key={index} className='navbar__item'>
                                    <Link to={link.url} className={`navbar__link ${link.counter ? `fav-link` : ''}`}  onClick={navbarToggle}>

                                        {link.counter ? <span className='bg-danger'>{count}</span> : null}

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