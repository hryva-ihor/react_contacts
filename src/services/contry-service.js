import axios from "axios";
const COUNTRIS_URL = `https://restcountries.com/v2/`;
const ALL_COUNTRIS_URI = `all?fields=name,capital,flags,population,region;`;
const Axios = axios.create({
  baseURL: COUNTRIS_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCountiesData = () => {
  return Axios.get(ALL_COUNTRIS_URI);
};

export const getCountryItemByName = (name) => {
  return Axios.get(COUNTRIS_URL + "/name/" + name);
};

export const getBorderCountryByCode = (code) => {
  // console.log(code);
  return Axios.get(COUNTRIS_URL + "/alpha?codes=" + code.join(","));
};

// export const deletAlbum = (id) => {
//   return Axios.delete(`${ALBUMS_URI}/${id}`);
// };

// export const addNewAlbum = (album) => {
//   return Axios.post(ALBUMS_URI, album);
// };
