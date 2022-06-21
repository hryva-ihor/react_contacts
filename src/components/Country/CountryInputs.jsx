import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { CountrySelect } from "./CountrySelect";
import { CountrySearch } from "./CountrySearch";
const CountryInputs = ({ handleSearch, countriesName }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    handleSearch(search, region);
  }, [search, region]);
  return (
    <Box display="flex" justifyContent="space-between">
      <CountrySelect region={region} setRegion={setRegion} />
      <CountrySearch
        search={search}
        setSearch={setSearch}
        countriesName={countriesName}
      />
    </Box>
  );
};

export { CountryInputs };
