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
      exit={{ opacity: 0, x: "300px" }}
      initial={{ opacity: 0, x: "300px" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 150,
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
        <div className="countryPage_infoTop">
          <div className="countryPage__infoTopLeft">
            <h2>Belgium</h2>
            <p>
              <strong>Native Name:</strong>
            </p>
            <p>
              <strong>Population:</strong>
            </p>
            <p>
              <strong>Region:</strong>
            </p>
            <p>
              <strong>Sub Region:</strong>
            </p>
            <p>
              <strong>Capital:</strong>
            </p>
          </div>
        </div>

        <div className="countryPage__infoTopRight">
          <p>
            <strong>Top Level Domain:</strong>
          </p>
          <p>
            <strong>Currency:</strong>
          </p>
          <p>
            <strong>Language:</strong>
          </p>
        </div>
      </div>
      <div className="countryPage_infoBottom">
        <p>
          <strong>Border Countries:</strong>
        </p>
      </div>
    </motion.div>
  );
}

export default CountryPage;
