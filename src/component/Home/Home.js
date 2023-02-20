import React from "react";
import { Card, Stack, Typography, Paper } from "@mui/material";
import Post from "../Controller/Post";
import Nav from "../UI/Nav";
import User from "../Controller/User";
import { useState, useContext } from "react";
import AuthContext from "../Store/auth-context";

function Home(props) {
  const ctx = useContext(AuthContext);

  return (
    <>
      <Nav value={props.getVal} />
      {ctx.tabPost ? <Post value={ctx.value}  /> : <User value={ctx.value}  />}
    </>
  );
}

export default Home;
