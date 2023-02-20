import { Typography, Button, ButtonGroup, Stack, Input } from "@mui/material";
import "./App.css";
import Nav from "./component/UI/Nav";
import Home from "./component/Home/Home";
import { useState, useContext } from "react";
import AuthContext from "./component/Store/auth-context";
import Header from "./component/UI/Header";
import Tab from "./component/UI/Tab";

function App() {
  const [value, setValue] = useState("5");
  const [isItPost, setIsItPost] = useState(true);

  const getTab = (tab) => {
    console.log(tab);
    setIsItPost(tab);
  };

  const getVal = (value) => {
    setValue(value);
  };
  return (
    <AuthContext.Provider value={{ value: value, tabPost : isItPost }}>
      <div className="App">
        <Tab getTab={getTab} />
        <Header />
        <Home getVal={getVal} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
