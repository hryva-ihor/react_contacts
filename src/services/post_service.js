import axios from "axios";
const POST_URL = `https://hn.algolia.com/api/v1/search?`;
// const POST_URI = `albums`;

export const getProstsData = (page) => {
  return axios.get(POST_URL + page);
};

// export const getAlbumItemget = (id) => {
//   return Axios.get(ALBUMS_URI + `/${id}`);
// };

// export const updateAlbum = (editAlbum, id) => {
//   return Axios.put(`${ALBUMS_URI}/${id}`, editAlbum);
// };

// export const deletAlbum = (id) => {
//   return Axios.delete(`${ALBUMS_URI}/${id}`);
// };

// export const addNewAlbum = (album) => {
//   return Axios.post(ALBUMS_URI, album);
// };
