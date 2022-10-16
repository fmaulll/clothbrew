import React from "react";
import { Grid, Typography } from "@mui/material";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import BackgroundHero from "./assets/images/Background-Hero.png";

const styles = {
  hero: {
    backgroundImage: `url(${BackgroundHero})`,
    height: "1018px",
    padding: "0 120px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
  },
};

function App() {
  return (
    <div>
      <div style={styles.hero}>
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;
