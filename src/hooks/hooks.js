import { useState, useEffect } from "react";
import axios from "axios";

function useGetCountry(country) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${country}`)
      .then((res) => {
        setError(false);
        setSelectedCountry(res.data);
      })
      .catch((err) => setError("Network Connection is Lost"));
  }, [country]);

  return [selectedCountry, error];
}

export default useGetCountry;
