import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCountryItemByName } from "services/contry-service";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import { Currencies } from "components/Country/Currencies";
import { getBorderCountryByCode } from "../services/contry-service";

const CountryAboute = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountry, setBorderCountry] = useState([]);
  // console.log(country.borders.join(","));
  useEffect(() => {
    getCountryItemByName(name.slice(1)).then(({ data }) => {
      setCountry(data[0]);
      // console.log(data[0]);
      data[0].borders &&
        getBorderCountryByCode(data[0].borders).then(({ data }) =>
          setBorderCountry(data)
        );
    });
  }, [name]);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleOnClick = (name) => {
    navigate(`/countries/:${name}`);
  };
  return (
    country && (
      <Box>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={() => {
            goBack();
          }}
        >
          Back
        </Button>
        <Card sx={{ maxWidth: 700, margin: "20px auto" }}>
          <CardMedia
            component="img"
            sx={{ height: { xs: "240px", sm: "350px" } }}
            // height={{ xs: "240px", sm: "350px" }}
            image={`${country.flags.svg}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country.name}
            </Typography>
            <List>
              <ListItem
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "40px",
                }}
              >
                <ListItemText
                  sx={{ display: "flex", flexDirection: "column-reverse" }}
                  primary={country.capital}
                  secondary="Capital"
                />
                <ListItemText
                  sx={{ display: "flex", flexDirection: "column-reverse" }}
                  primary={country.nativeName}
                  secondary="Native name"
                />
                <ListItemText
                  sx={{ display: "flex", flexDirection: "column-reverse" }}
                  primary={country.region}
                  secondary="Region"
                />
                <ListItemText
                  sx={{ display: "flex", flexDirection: "column-reverse" }}
                  primary={country.languages.map((lang) => ` ${lang.name},`)}
                  secondary="Languages"
                />
                <ListItemText
                  sx={{ display: "flex", flexDirection: "column-reverse" }}
                  primary={country.subregion}
                  secondary="Sub region"
                />
                <ListItemText
                  sx={{ display: "flex", flexDirection: "column-reverse" }}
                  primary={country.population}
                  secondary="Population"
                />
                <ListItemText
                  sx={{ display: "flex", flexDirection: "column-reverse" }}
                  primary={
                    <List sx={{ p: 0 }}>
                      {country.currencies.map((curr) => {
                        return <Currencies key={curr.code} curr={curr} />;
                      })}
                    </List>
                  }
                  secondary="Currencies"
                />
              </ListItem>
            </List>
            {!!borderCountry.length && <Typography> Border Country</Typography>}
            <List
              sx={{
                display: "flex",
                // textDecoration: "none",
                flexWrap: "wrap",
              }}
            >
              {!!borderCountry.length &&
                borderCountry.map((border) => {
                  return (
                    <ListItem key={border.name}>
                      <Button onClick={() => handleOnClick(border.name)}>
                        {border.name}
                      </Button>
                    </ListItem>
                  );
                })}
            </List>
          </CardContent>
        </Card>
      </Box>
    )
  );
};

export { CountryAboute };
