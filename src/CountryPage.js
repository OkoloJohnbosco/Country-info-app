import React from "react";
import "./CountryPage.css";
import Button from "./Button";
import { IoArrowBackSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

function CountryPage({ img }) {
  const history = useHistory();
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
      <div className="countryPage__img">
        <img
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          alt=""
        />
      </div>
      <div className="countryPage__info">
        <h2>Belgium</h2>

        <div className="countryPage_infoTop">
          <div className="countryPage__infoTopLeft">
            <p>
              <strong>Native Name: </strong>
              {"Biegil"}
            </p>
            <p>
              <strong>Population: </strong>
              {"11,203,234"}
            </p>
            <p>
              <strong>Region: </strong>
              {"Europe"}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {"Western Europe"}
            </p>
            <p>
              <strong>Capital: </strong>
              {"Brussels"}
            </p>
          </div>

          <div className="countryPage__infoTopRight">
            <p>
              <strong>Top Level Domain: </strong>
              {"Be"}
            </p>
            <p>
              <strong>Currency: </strong>
              {"Euro"}
            </p>
            <p>
              <strong>Language: </strong>
              {"Dutch, French, German"}
            </p>
          </div>
        </div>
        <div className="countryPage_infoBottom">
          <p>
            <strong>Border Countries: </strong>
            <span>
              <Button>France</Button>
              <Button>Germany</Button>
              <Button>Nertherland</Button>
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CountryPage;
