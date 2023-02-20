import React from "react";
import { Stack, Typography } from "@mui/material";
import AuthContext from "../Store/auth-context";
import { useContext } from "react";

const Header = () => {
    const ctx = useContext(AuthContext);
  return (
    <Stack
      sx={{
        width: "80%",
        margin: "auto",
        marginTop: "10px",
        padding: "10px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}

      md = {{
        width: "80%",
        margin: "auto",
        marginTop: "10px",
        padding: "10px",
        overflow: "auto",
        
      }}
    >
      <Typography variant="h4" component="h2">
        {ctx.tabPost ? "POST" : "USER"}
      </Typography>
      <Typography variant="body2" color="text.secondary" component="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </Typography>
    </Stack>
  );
};

export default Header;
