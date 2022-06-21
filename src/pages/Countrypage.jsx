import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/system";

import { CountryInputs } from "components/Country/CountryInputs";
import { CountryList } from "components/Country/CountryList";
import { getCountiesData } from "../services/contry-service";
const Countrypage = () => {
  const [countries, setCountries] = useState([]);
  const [filtredCountries, setFiltredCounties] = useState([]);
  // const [counriesNameArr, setCounriesNameArr] = useState([])
  useEffect(() => {
    getCountiesData().then(({ data }) => {
      setFiltredCounties(data);
      setCountries(data);
    });
  }, []);
  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region === "All") {
      setFiltredCounties(data);
    }
    if (region && region !== "All") {
      data = data.filter((country) => country.region.includes(region));
    }
    if (search) {
      data = data.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFiltredCounties(data);
  };
  const countriesName = filtredCountries.map((country) => {
    return { name: country.name };
  });

  // console.log(countriesName);
  return (
    <Box p={2} margin="0 auto" maxWidth="lg">
      <CountryInputs
        handleSearch={handleSearch}
        countriesName={countriesName}
      />
      <CountryList countries={filtredCountries} />
    </Box>
  );
};

export { Countrypage };
