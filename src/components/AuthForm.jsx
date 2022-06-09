import React, { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export const AuthForm = (props) => {
  const { title, handleSubmit } = props;
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const location = useLocation();
  const [btnVisible, setBtnVisible] = useState(true);
  useMemo(() => {
    if (location.pathname === "/register") setBtnVisible(!btnVisible);
  }, [location.pathname]);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      display="flex"
      alignItems="center"
      flexDirection="column"
      mt="10%"
    >
      <Typography variant="h4">{title}</Typography>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper-email">Email</InputLabel>
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          value={email}
          name="useremail"
          id="component-helper-email"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Enter your email
        </FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper-pass">Password</InputLabel>
        <Input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          value={pass}
          name="userpass"
          id="component-helper-pass"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Enter your password
        </FormHelperText>
      </FormControl>
      <Button
        onClick={(e) => {
          handleSubmit(e, email, pass);
        }}
        type="submit"
        variant="outlined"
      >
        Submit
      </Button>
      {btnVisible && (
        <Link style={{ textDecoration: "none" }} to="/register">
          <Button>Sign up</Button>
        </Link>
      )}
    </Box>
  );
};
