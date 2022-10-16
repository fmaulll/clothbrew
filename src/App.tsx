import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import BackgroundHero from "./assets/images/Background-Hero.png";
import BackgroundBottomHero from "./assets/images/Hero-Bottom.png";
import { ReactComponent as ArrowRight } from "./assets/icons/ArrowSmall.svg";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BackgroundHero})`,
          height: "100vh",
          padding: "0 120px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <NavigationBar />
        <Grid container direction="column" sx={{ marginTop: "155px" }}>
          <Grid item>
            <Typography
              sx={{
                fontSize: "56px",
                fontWeight: 700,
                color: "#FFFFFF",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Your Outfit Express
              <br />
              <span
                style={{ fontWeight: 200, fontFamily: "'Raleway', sans-serif" }}
              >
                Who You Are
              </span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#FFFFFF",
                fontFamily: "'Mulish', sans-serif",
                display: "flex",
                alignItems: "center",
              }}
            >
              Discover us{" "}
              <ArrowRight
                style={{
                  fill: "#FFFFFF",
                  marginLeft: "5px",
                  marginTop: "10px",
                }}
              />
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: "60px" }}>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "60px",
                background: "#25313C",
                color: "#FFFFFF",
                padding: "16px 36px",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                "&:active": {
                  background: "#3c4c5b",
                },
                "&:hover": {
                  background: "#1d2730",
                },
              }}
            >
              Connect With Us
            </Button>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundImage: `url(${BackgroundBottomHero})`,
          height: "310px",
          padding: "0 120px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default App;
