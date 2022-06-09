import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Button, ImageList } from "@mui/material";
import { Albumsitem } from "../components/Albumsitem";
import { NavLink } from "react-router-dom";
import useAlbums from "../hook/useAlbums";
// import { useDispatch, useSelector } from "react-redux";
// import { getAlbumsData } from "../services/album-services";
// import { fetchAlbums } from "../store/albums/actions";

const Blogpage = () => {
  // const dispatch = useDispatch();
  const { albums } = useAlbums();
  // const albums = useSelector((state) => state.albums.albums.reverse());
  // const [albums, setAlbums] = useState([]);
  // useEffect(() => {
  //   dispatch(fetchAlbums());
  //   // fetchAlbums();
  // }, []);

  return (
    <Box>
      <NavLink className="nav-link nav-link__dark" to={"/albumspage/new"}>
        <Button sx={{ mt: 2 }} variant="contained">
          Add album
        </Button>
      </NavLink>

      <ImageList sx={{ width: "100%", height: "auto" }}>
        {albums.map((album) => {
          return <Albumsitem key={album.id} album={album} />;
        })}
      </ImageList>
    </Box>
  );
};

export default Blogpage;
