import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ src, country, population, region, capital, code }) {
  const history = useHistory();

  const goToCountryPage = () => {
    history.push(`./${code}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="card"
      onClick={goToCountryPage}
    >
      <img src={src} alt="" className="card__img" />
      <div className="card__info">
        <h3>{country}</h3>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </motion.div>
  );
}

export default Card;
