import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CountrySearch = ({ search, setSearch, countriesName }) => {
  const setSearchCountry = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <Box
      value={search}
      onChange={setSearchCountry}
      sx={{
        "& > :not(style)": { width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={countriesName.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search country name"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Box>
  );
};

export { CountrySearch };
