import { Route, Routes } from "react-router";

import Albumspage from "./pages/Albumspage";
import Homepage from "./pages/Homepage";
import Notfoundpage from "./pages/Notfoundpage";
import { Box } from "@mui/system";
import { Layout } from "./components/Layout";
import { Abautpage } from "./pages/Abautpage";
import { AlbumSinglepage } from "./pages/AlbumSinglepage";
import { Createalbum } from "./pages/Createalbum";
import Editalbum from "./pages/Editalbum";
import { Loginpage } from "./pages/Loginpage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { useState } from "react";
import { ModalContext } from "./context/ModalContext";
import { Newspage } from "./pages/Newspage";
import Registerpage from "./pages/Registerpage";
// import { useSelector } from "react-redux";
import { ModalLogout } from "./components/ModalLogout";
import { Countrypage } from "pages/Countrypage";
import { CountryAboute } from "pages/CountryAboute";

function App() {
  // const { status, error } = useSelector((state) => state.albums);
  const [openModal, setOpenModal] = useState(false);
  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      <Box
        width="1800px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route
                path="albumspage"
                element={
                  <RequireAuth>
                    <Albumspage />
                  </RequireAuth>
                }
              />
              <Route
                path="albumspage/:id"
                element={
                  <RequireAuth>
                    <AlbumSinglepage />
                  </RequireAuth>
                }
              />
              <Route
                path="albumspage/:id/edit"
                element={
                  <RequireAuth>
                    <Editalbum />
                  </RequireAuth>
                }
              />
              <Route
                path="albumspage/new"
                element={
                  <RequireAuth>
                    <Createalbum />
                  </RequireAuth>
                }
              />
              <Route
                path="newsspage"
                element={
                  <RequireAuth>
                    <Newspage />
                  </RequireAuth>
                }
              />
              <Route
                path="countries"
                element={
                  <RequireAuth>
                    <Countrypage />
                  </RequireAuth>
                }
              />
              <Route
                path="countries/:name"
                element={
                  <RequireAuth>
                    <CountryAboute />
                  </RequireAuth>
                }
              />
              <Route path="aboutpage" element={<Abautpage />} />
              <Route path="login" element={<Loginpage />} />
              <Route path="register" element={<Registerpage />} />
              <Route path="*" element={<Notfoundpage />} />
            </Route>
          </Routes>
        </AuthProvider>
        {openModal ? <ModalLogout /> : ``}
      </Box>
    </ModalContext.Provider>
  );
}

export default App;
