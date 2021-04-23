import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FavouriteContext } from "../../context/favourite-context";

import "./card.css";

const Card = ({ film }) => {
  const actions = useContext(FavouriteContext)[1];

  const {
    ID,
    Title,
    Year,
    Poster,
    imdbRating,
    Runtime,
    Country,
    Director,
  } = film;

  const [bgfav, setBgfav] = useState(actions.isFav(film));

 

  const bgToggle = () => {
    if (!bgfav) {
      actions.addFavourite(film);
      setBgfav(true);
    } else {
      actions.deleteFavourite(ID);
      setBgfav(false);
    }
  };

  return (
    <div className="card mb-3">
      <div className="right-top">
        <button
          onClick={bgToggle}
          type="button"
          className={`right-top__btn ${bgfav ? "bg-success" : "bg-danger"}`}
        >
          
          <i className="fas fa-heart"> </i>
        </button>
        <div className="raiting bg-info"> {imdbRating} </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-12">
          <img className="poster" src={Poster} alt={Title} />
        </div>{" "}
        <div className="col-xl-8 col-12">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/film/` + ID}> {Title} </Link>
            </h5>{" "}
            <ul className="list-group list-group__flash">
              <li className="list-group-item"> Год выпуска: {Year} </li>
              <li className="list-group-item"> Длительность: {Runtime} </li>
              <li className="list-group-item"> Страна: {Country} </li>
              <li className="list-group-item"> Режиссер: {Director} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
