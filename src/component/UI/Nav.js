import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Card } from "@mui/material";
import { useState, useContext } from "react";
import AuthContext from "../Store/auth-context";


const Nav = (props) => {
  const ctx = useContext(AuthContext);

  const handleChange = (event) => {
    props.value(event.target.value);
  };

  return (
    <Card
      sx={{
        width: "600px",
        margin: "auto",
        marginTop: "10px",
        padding: "10px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Number of {ctx.tabPost ? "Posts" : "Users"}
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={ctx.value}
          onChange={handleChange}
        >
          <FormControlLabel value="5" control={<Radio />} label="5" />
          <FormControlLabel value="10" control={<Radio />} label="10" />
          <FormControlLabel value="15" control={<Radio />} label="15" />
        </RadioGroup>
      </FormControl>
    </Card>
  );
};

export default Nav;
