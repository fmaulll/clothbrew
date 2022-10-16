import React from "react";
import { Grid, Typography, Button, useMediaQuery } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import BackgroundHero from "./assets/images/Background-Hero.png";
import BackgroundBottomHero from "./assets/images/Hero-Bottom.png";
import { ReactComponent as ArrowRight } from "./assets/icons/ArrowSmall.svg";
import PostOne from "./assets/images/post1.png";
import PostTwo from "./assets/images/post2.png";
import PostThree from "./assets/images/post3.png";
import PostFour from "./assets/images/post4.png";
import PostFive from "./assets/images/post5.png";

function App() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${BackgroundHero})`,
          height: `${matches ? "100vh" : "calc(100vh - 210px)"}`,
          padding: `${matches ? "0 120px" : "0 32px"}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <NavigationBar />
        <Grid
          container
          direction="column"
          sx={{ marginTop: `${matches ? "155px" : "50px"}` }}
        >
          <Grid item>
            <Typography
              sx={{
                fontSize: "56px",
                fontWeight: 700,
                color: "#FFFFFF",
                fontFamily: "'Raleway', sans-serif",
                lineHeight: `${matches ? "" : "100%"}`,
              }}
            >
              Your {!matches && <br />}Outfit {!matches && <br />}Express
              <br />
              <span
                style={{
                  fontSize: `${matches ? "56px" : "40px"}`,
                  fontWeight: 200,
                  fontFamily: "'Raleway', sans-serif",
                }}
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
                  marginTop: `${matches ? "10px" : "20px"}`,
                }}
              />
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: `${matches ? "60px" : "20px"}` }}>
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
          height: `${matches ? "310px" : "215px"}`,
          padding: `${matches ? "0 120px" : "0 32px"}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Raleway', sans-serif",
            color: "#FFFFFF",
            fontSize: `${matches ? "30px" : "20px"}`,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          “True change cannot be made {!matches && <br />}if it is bound by
          laws, {!matches && <br />}limitations, and predictions.
          <br /> Coffee is one of those tools {!matches && <br />}that can break
          em.”
        </Typography>
      </div>
      <div
        style={{
          marginBottom: "50px",
          padding: `${matches ? "0 120px" : "0 32px"}`,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems={matches ? "center" : "flex-start"}
          direction="column"
          sx={{ marginTop: "60px" }}
        >
          <Grid item>
            <Typography
              sx={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: `${matches ? "" : "100%"}`,
              }}
            >
              Check {!matches && <br />}Out Our Instagram
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                textAlign: `${matches ? "center" : "start"}`,
              }}
            >
              Check our instagram to get the latest {!matches && <br />}info
              from our products and customers {!matches && <br />}review. Get in
              touch with us to <br />
              get interesting pieces every day
            </Typography>
          </Grid>
          {matches ? (
            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              sx={{ marginTop: "60px" }}
            >
              <Grid item>
                <img src={PostOne} alt="PostOne" />
              </Grid>
              <Grid item>
                <img src={PostTwo} alt="PostTwo" />
              </Grid>
              <Grid item>
                <img src={PostThree} alt="PostThree" />
              </Grid>
              <Grid item>
                <img src={PostFour} alt="PostFour" />
              </Grid>
              <Grid item>
                <img src={PostFive} alt="PostFive" />
              </Grid>
            </Grid>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "55px",
              }}
            >
              <div>
                <img src={PostOne} alt="PostOne" />
              </div>

              <img src={PostTwo} alt="PostTwo" />
            </div>
          )}
          <Grid
            item
            container
            justifyContent="center"
            sx={{ marginTop: "60px" }}
          >
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "60px",
                border: "1px solid #000000",
                color: "#000000",
                background: "#FFFFFF",
                padding: "16px 36px",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                "&:active": {
                  background: "#bbcede",
                },
                "&:hover": {
                  background: "#bbcede",
                },
              }}
            >
              View our Instagram
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
