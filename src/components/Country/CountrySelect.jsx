import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

const CountrySelect = ({ setRegion }) => {
  const regions = [
    { label: "All" },
    { label: "Africa" },
    { label: "America" },
    { label: "Asia" },
    { label: "Europe" },
    { label: "Oceania" },
  ];
  // const regionValue = (e) => {
  //   console.log(e);
  // };
  const [region, setSelectRegion] = React.useState("");

  const handleChange = (event) => {
    setSelectRegion(event.target.value);
    setRegion(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      {/* <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={"America"}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          {regions.map((region) => {
            return (
              <option key={region.label} value={region.label}>
                {region.label}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl> */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        {/* <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="Region"
          defaultValue={"America"}
          onChange={handleChange}
        >
          {regions.map((region) => {
            return (
              <MenuItem key={region.label} value={region.label}>
                {region.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
    // <Autocomplete
    //   disablePortal
    //   onChange={() => {
    //     regionValue();
    //   }}
    //   id="combo-box-demo"
    //   options={regions}
    //   sx={{ width: 300 }}
    //   renderInput={(params) => <TextField {...params} label="Region" />}
    // />
  );
};

export { CountrySelect };
