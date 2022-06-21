import { ListItem } from "@mui/material";
import React from "react";

const Currencies = ({ curr }) => {
  return (
    <>
      <ListItem sx={{ p: 0 }}>{`name: ${curr.name}`}</ListItem>
      <ListItem sx={{ p: 0 }}>{`code: ${curr.code}`}</ListItem>
      <ListItem sx={{ p: 0 }}>{`symbol: ${curr.symbol}`}</ListItem>
    </>
  );
};

export { Currencies };
