import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

const Albumsitem = (props) => {
  const album = props.album;
  // console.log(album);
  return (
    <ImageListItem sx={{ minHeight: "100px" }} key={album.img}>
      <img src={`${album.img}`} alt={album.title} loading="lazy" />
      <ImageListItemBar
        title={album.title}
        subtitle={album.subtitle}
        actionIcon={
          <RouterLink className="nav-link" to={`/albumspage/:${album.id}`}>
            <Button size="small" sx={{ m: 2 }} variant="contained">
              about
            </Button>
          </RouterLink>
        }
      />
    </ImageListItem>
  );
};

export { Albumsitem };
