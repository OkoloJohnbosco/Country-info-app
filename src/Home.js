import React, { useState, useEffect } from "react";
import "./Home.css";
import { IoSearchOutline } from "react-icons/io5";
import Card from "./Card";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import axios from "axios";

function Home() {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    setError(false);
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Network Connection is Lost");
      });
  };

  const searchContry = (e) => {
    if (e.key === "Enter") {
      setCountries(null);
      setError(false);
      let country = e.target.value.trim();
      if (country !== "") {
        axios
          .get(`https://restcountries.eu/rest/v2/name/${country}`)
          .then((res) => {
            setError(false);
            setCountries(res.data);
          })
          .catch((err) => setError("Country Not Found"));
      } else {
        getAllCountries();
      }
    }
  };

  const filterCountry = (e) => {
    setCountries(null);
    if (e.target.value !== "none") {
      axios
        .get(`https://restcountries.eu/rest/v2/region/${e.target.value}`)
        .then((res) => {
          setCountries(res.data);
          setError(false);
        })
        .catch((err) => {
          setError("Network Connection is Lost");
          console.log(err);
        });
    } else {
      getAllCountries();
    }
  };
  let home = (
    <>
      {countries ? (
        <div className="home__cardSection">
          {countries.map((country) => (
            <Card
              key={`${country.alpha2Code}${country.alpha3Code}`}
              code={country.alpha3Code}
              country={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              src={country.flag}
            />
          ))}
        </div>
      ) : (
        <div className="home__spinner">
          <Spinner />
        </div>
      )}
    </>
  );

  if (error) home = <p>{error}</p>;
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home"
    >
      <div className="home__inputContainer">
        <div className="home__searchContainer">
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Search for a Country"
            onKeyDown={searchContry}
          />
        </div>

        <div className="home__filterContainer">
          <select name="region" form="carform" onChange={filterCountry}>
            <option value="none">No Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      {home}
    </motion.div>
  );
}

export default Home;
