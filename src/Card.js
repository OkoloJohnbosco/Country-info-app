import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";

function Card({ src, country, population, region, capital }) {
  const history = useHistory();

  const goToCountryPage = () => {
    history.push("./country");
  };
  return (
    <div className="card" onClick={goToCountryPage}>
      <img src={src} alt="" className="card__img" />
      <div className="card__info">
        <h3>{country}</h3>
        <p>
          <strong>Population:</strong>
          {population}
        </p>
        <p>
          <strong>Region:</strong>
          {region}
        </p>
        <p>
          <strong>Capital:</strong>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
