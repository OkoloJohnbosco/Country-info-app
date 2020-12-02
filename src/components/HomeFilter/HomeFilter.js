import React from "react";
import "./HomeFilter.css";

function HomeFilter({ filterCountry }) {
  return (
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
  );
}

export default HomeFilter;
