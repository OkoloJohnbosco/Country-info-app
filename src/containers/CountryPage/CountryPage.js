import React from "react";
import "./CountryPage.css";
import Button from "../../components/Button/Button";
import { IoArrowBackSharp } from "react-icons/io5";
import { useHistory, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Spinner from "../../components/Spinner/Spinner";
import { getName, getDomian } from "../../helpers/helper";
import useGetCountry from "../../hooks/hooks";

function CountryPage(props) {
  const history = useHistory();
  const { country } = useParams();
  const [selectedCountry, error] = useGetCountry(country);

  const selectCountry = (border) => {
    history.push(`./${border}`);
  };

  let countryPage = (
    <>
      {selectedCountry ? (
        <>
          <div className="countryPage__img">
            <img src={selectedCountry.flag} alt="" />
          </div>
          <div className="countryPage__info">
            <h2>{selectedCountry.name}</h2>

            <div className="countryPage_infoTop">
              <div className="countryPage__infoTopLeft">
                <p>
                  <strong>Native Name: </strong>
                  {selectedCountry.nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {selectedCountry.population}
                </p>
                <p>
                  <strong>Region: </strong>
                  {selectedCountry.region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {selectedCountry.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {selectedCountry.capital}
                </p>
              </div>

              <div className="countryPage__infoTopRight">
                <p>
                  <strong>Top Level Domain: </strong>
                  {getDomian(selectedCountry.topLevelDomain)}
                </p>
                <p>
                  <strong>Currency: </strong>
                  {getName(selectedCountry.currencies)}
                </p>
                <p>
                  <strong>Language: </strong>
                  {getName(selectedCountry.languages)}
                </p>
              </div>
            </div>
            <div className="countryPage_infoBottom">
              <p>
                <strong>Border Countries: </strong>
                <span>
                  {selectedCountry.borders.length === 0 ? (
                    <span className="countryPage__none">None</span>
                  ) : (
                    selectedCountry.borders.map((bor) => (
                      <Button key={bor} clicked={() => selectCountry(bor)}>
                        {bor}
                      </Button>
                    ))
                  )}
                </span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="countryPage__spinner">
          <Spinner />
        </div>
      )}
    </>
  );
  if (error) countryPage = <p className="countryPage__error">{error}</p>;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="countryPage"
    >
      <div className="countryPage__nav">
        <Button clicked={() => history.push("/")}>
          <IoArrowBackSharp className="mr-2" />
          Back
        </Button>
      </div>
      {countryPage}
    </motion.div>
  );
}

export default CountryPage;
