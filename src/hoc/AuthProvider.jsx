import React, { createContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { email, token, id } = useSelector((state) => state.user);
  // const [user, setUser] = useState(null);
  // useMemo(() => {
  //   return setUser(localStorage.getItem("user"));
  // }, [user]);
  // const signIn = (newUser, cb) => {
  //   setUser(newUser);
  //   cb();
  //   // localStorage.setItem("user", String(newUser));
  // };
  // const signOut = (cb) => {
  //   setUser(null);
  //   cb();
  //   // localStorage.removeItem("user");
  // };
  const value = { email, token, id };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
