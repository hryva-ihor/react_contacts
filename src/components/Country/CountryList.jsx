import React from "react";
import { Box } from "@mui/system";

import { CountryCard } from "./CountryCard";

const CountryList = ({ countries }) => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      {countries.map((country) => {
        const countryInfo = {
          img: country.flags.svg,
          name: country.name,
          info: [
            {
              title: "Population",
              discription: String(country.population),
            },
            {
              title: "Region",
              discription: String(country.region),
            },
            {
              title: "Capital",
              discription: String(country.capital),
            },
          ],
        };
        return <CountryCard key={country.name} countryInfo={countryInfo} />;
      })}
    </Box>
  );
};

export { CountryList };
