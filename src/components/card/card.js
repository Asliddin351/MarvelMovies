import React, {useState} from 'react'
import data from '../../data/data.json'
import {Link} from 'react-router-dom'
import './card.css'
 function Card() {
    //Временно
        const db = data.map(d=>{
            return {id: d.ID, poster: d.Poster, filmName: d.Title, raiting: d.imdbRating, year: d.Year, runTime: d.Runtime, 
                country: d.Country, rej: d.Director
            }
        })
    //----------

        const [bgfav, setBgfav] = useState(false)

        const favBgToggler = () => {
            setBgfav(!bgfav)
        }

    return (
        <div className='card'>

            <div className='right-top'>
                <button onClick={favBgToggler} type='button' className={`right-top__btn ${bgfav ? 'bg-success' : 'bg-danger'}`}><i className="fas fa-heart"></i></button>
                <div className='raiting bg-info'>{db[0].raiting}</div>
            </div>

            <div className='row'>
                <div className='col-xl-4 col-12 '>
                    <img className='poster' src={db[0].poster} alt={db[1].filmName}/>
                </div>
                <div className='col-xl-8 col-12'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <Link to={`/film/${db[0].id}`}>{db[0].filmName}</Link>
                        </h5>
                        <ul className='list-group list-group__flash'>
                            <li className='list-group-item'>Год выпуска: {db[0].year}</li>
                            <li className='list-group-item'>Длительность: {db[0].runTime}</li>
                            <li className='list-group-item'>Страна: {db[0].country}</li>
                            <li className='list-group-item'>Режиссер: {db[0].rej}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
