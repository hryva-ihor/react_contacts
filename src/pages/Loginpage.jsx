import React from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../hook/useAuth";
import { useDispatch } from "react-redux";
import { AuthForm } from "../components/AuthForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "store/slices/userSlice";
import { Box } from "@mui/system";

const Loginpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();
  // const { signIn } = useAuth();
  // const fromPage = location.state?.from?.pathname || "/";
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const user = form.username.value;
  //   signIn(user, () => {
  //     navigate(fromPage, { replace: true });
  //   });
  // };
  //   // localStorage.setItem("user", String(newUser));
  // };
  // const signOut = (cb) => {
  //   setUser(null);
  //   cb();
  //   // localStorage.removeItem("user");
  const handleLogin = (e, email, pass) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
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
        switch (errorCode) {
          case "auth/user-not-found":
            alert("user - not - found");
            break;
          case "auth/wrong-password":
            alert("wrong-password");
            break;
          default:
            break;
        }
      });
  };

  return (
    <Box>
      <AuthForm title="Sign in" handleSubmit={handleLogin} />
    </Box>
  );
};

export { Loginpage };
