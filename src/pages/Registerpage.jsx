import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { AuthForm } from "../components/AuthForm";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "store/slices/userSlice";

const Registerpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location.pathname);
  // const [btnVisible, setBtnVisible] = useState(true);
  // useMemo(() => {
  //   if (location.pathname === "/register") setBtnVisible(!btnVisible);
  // }, [location.pathname]);
  const handleRegister = (e, email, pass) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        localStorage.setItem("email", String(user.email));
        localStorage.setItem("token", String(user.accessToken));
        localStorage.setItem("id", String(user.uid));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return <AuthForm title="Sign up" handleSubmit={handleRegister} />;
};

export default Registerpage;
