import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

const CountryCard = (props) => {
  const navigate = useNavigate();
  const { img, name, info } = props.countryInfo;
  const handleOnClick = () => {
    navigate(`/countries/:${name}`);
  };
  return (
    <Box onClick={handleOnClick} flex="1 1 345px" m={1}>
      <Card>
        <CardActionArea>
          <Box sx={{ overflow: "hidden" }}>
            <CardMedia
              sx={{ transition: "all linear .2s" }}
              onMouseOver={over}
              onMouseLeave={leave}
              component="img"
              height="240"
              image={`${img}`}
              alt={name}
            />
          </Box>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            {info.map((info) => {
              return (
                <Box m={1} key={info.title}>
                  <Typography variant="span">
                    {info.title}:
                    <Typography m={1} variant="span" color="text.secondary">
                      {info.discription}
                    </Typography>
                  </Typography>
                </Box>
              );
            })}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export { CountryCard };
function over(e) {
  e.stopPropagation();
  e.target.style.transform = "scale(1.05)";
  // console.log();
}
function leave(e) {
  e.stopPropagation();
  e.target.style.transform = "";
}
