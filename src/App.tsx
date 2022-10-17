import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Link,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import BackgroundHero from "./assets/images/Background-Hero.png";
import BackgroundBottomHero from "./assets/images/Hero-Bottom.png";
import { ReactComponent as ArrowRight } from "./assets/icons/ArrowSmall.svg";
import PostOne from "./assets/images/post1.png";
import PostTwo from "./assets/images/post2.png";
import PostThree from "./assets/images/post3.png";
import PostFour from "./assets/images/post4.png";
import PostFive from "./assets/images/post5.png";
import { ReactComponent as ChevronDown } from "./assets/icons/ChevronDown.svg";
import { ReactComponent as ChevronUp } from "./assets/icons/ChevronUp.svg";
import { catalog } from "./data/catalog";
import Shopee from "./assets/images/Shopee.png";
import Tokopedia from "./assets/images/Tokopedia.png";
// import Instagram from "./assets/images/Instagram.png";
import { ReactComponent as Whatsapp } from "./assets/icons/Whatsapp.svg";
import { ReactComponent as Mail } from "./assets/icons/Mail.svg";
import LogoDark from "./assets/images/Logo-Dark.png";
import { ReactComponent as Instagram } from "./assets/icons/Instagram.svg";
import { ReactComponent as Facebook } from "./assets/icons/Facebook.svg";
import { ReactComponent as Twitter } from "./assets/icons/Twitter.svg";
import ClothBrew from "./assets/images/Logo.png";

function App() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [filterPrice, setFilterPrice] = useState<boolean>(false);
  const [filterCategory, setFilterCategory] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width:600px)");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilterCategory(!filterCategory);
    setAnchorEl(event.currentTarget);
  };
  const handleCloseCategory = () => {
    setFilterCategory(!filterCategory);
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        overflowX: "hidden",
        scrollBehavior: "smooth",
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
          scrollBehavior: "smooth",
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
            <Link href="#contact" sx={{ textDecoration: "none" }}>
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
            </Link>
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
      <div
        id="catalogue"
        style={{
          marginTop: "50px",
          padding: `${matches ? "0 120px" : "0 32px"}`,
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography
              sx={{
                fontSize: "56px",
                fontWeight: 500,
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Catalogue
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            sx={{ marginTop: "40px" }}
          >
            {matches ? (
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: selectedFilter === "" ? 700 : 400,
                        fontFamily: "'Raleway', sans-serif",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedFilter("")}
                    >
                      All
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: selectedFilter === "coffee" ? 700 : 400,
                        fontFamily: "'Raleway', sans-serif",
                        cursor: "pointer",
                        marginLeft: "45px",
                      }}
                      onClick={() => setSelectedFilter("coffee")}
                    >
                      Coffee
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: selectedFilter === "shirt" ? 700 : 400,
                        fontFamily: "'Raleway', sans-serif",
                        cursor: "pointer",
                        marginLeft: "45px",
                      }}
                      onClick={() => setSelectedFilter("shirt")}
                    >
                      Shirts
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: selectedFilter === "machine" ? 700 : 400,
                        fontFamily: "'Raleway', sans-serif",
                        cursor: "pointer",
                        marginLeft: "45px",
                      }}
                      onClick={() => setSelectedFilter("machine")}
                    >
                      Machine
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: selectedFilter === "All" ? 700 : 400,
                    fontFamily: "'Raleway', sans-serif",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={handleClickCategory}
                >
                  {selectedFilter === "" && "All"}
                  {selectedFilter === "coffee" && "Coffee"}
                  {selectedFilter === "shirt" && "Shirts"}
                  {selectedFilter === "machine" && "Machine"}
                  {filterCategory ? <ChevronUp /> : <ChevronDown />}
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseCategory}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      setSelectedFilter("");
                      handleCloseCategory();
                    }}
                  >
                    All
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedFilter("coffee");
                      handleCloseCategory();
                    }}
                  >
                    Coffee
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedFilter("shirt");
                      handleCloseCategory();
                    }}
                  >
                    Shirts
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedFilter("machine");
                      handleCloseCategory();
                    }}
                  >
                    Machine
                  </MenuItem>
                </Menu>
              </Grid>
            )}

            <Grid item>
              <Grid container>
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      fontFamily: "'Raleway', sans-serif",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Sort
                    <span
                      style={{
                        fontWeight: 600,
                        fontFamily: "'Raleway', sans-serif",
                        marginLeft: "8px",
                      }}
                    >
                      {" "}
                      by price
                    </span>
                    {filterPrice ? <ChevronUp /> : <ChevronDown />}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={matches ? "flex-start" : "center"}
              spacing={4}
              sx={{ marginTop: "40px" }}
            >
              {catalog
                .filter((item) =>
                  item.category.toLowerCase().includes(selectedFilter)
                )
                .map((item) => (
                  <Grid item xs={matches ? 4 : 6} sx={{ marginBottom: "10px" }}>
                    <Grid
                      container
                      direction="column"
                      // sx={{ border: "1px solid red" }}
                    >
                      <Grid
                        item
                        sx={{ marginBottom: matches ? "55px" : "8px" }}
                      >
                        <img
                          style={{ width: matches ? "100%" : "100%" }}
                          src={require(`${item.src}`)}
                          alt={item.name}
                        />
                      </Grid>
                      <Grid xs={12} item sx={{}}>
                        <Typography
                          sx={{
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: 600,
                            fontSize: matches ? "16px" : "13px",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Grid>
                      <Grid xs={12} item>
                        <Typography
                          sx={{
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: 400,
                            fontSize: matches ? "16px" : "13px",
                          }}
                        >
                          {item.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          margin: "60px 0",
          padding: `${matches ? "0 120px" : "0 32px"}`,
          scrollBehavior: "smooth",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: 700,
                fontFamily: "'Raleway', sans-serif",
                textAlign: "center",
                lineHeight: `${matches ? "" : "100%"}`,
              }}
            >
              Find <br />
              Out Our
            </Typography>
          </Grid>
          {matches && (
            <Grid item sx={{ marginTop: "40px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Shopee Button Desktop */}
                <Link href="https://shopee.co.id/" target="_blank">
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "60px",
                      border: "2px solid #000000",
                      color: "#000000",
                      background: "#FFFFFF",
                      width: "276px",
                      height: "71px",
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
                    <img src={Shopee} alt="Shopee" />
                  </Button>
                </Link>
                {/* Tokopedia Button Dekstop */}
                <Link
                  href="https://tokopedia.com/"
                  target="_blank"
                  sx={{ marginLeft: "15px" }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "60px",
                      border: "2px solid #000000",
                      color: "#000000",
                      background: "#FFFFFF",
                      width: "276px",
                      height: "71px",
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
                    <img src={Tokopedia} alt="Tokopedia" />
                  </Button>
                </Link>
              </Box>
            </Grid>
          )}
          {!matches && (
            <Grid item sx={{ marginTop: "40px" }}>
              {" "}
              {/* Shopee Button Mobile */}
              <Link href="https://shopee.co.id/" target="_blank">
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "60px",
                    border: "2px solid #000000",
                    color: "#000000",
                    background: "#FFFFFF",
                    width: "276px",
                    height: "71px",
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
                  <img src={Shopee} alt="Shopee" />
                </Button>
              </Link>
            </Grid>
          )}
          {!matches && (
            <Grid item sx={{ marginTop: "20px" }}>
              {" "}
              {/* Tokopedia Button Mobile */}
              <Link href="https://tokopedia.com/" target="_blank">
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "60px",
                    border: "2px solid #000000",
                    color: "#000000",
                    background: "#FFFFFF",
                    width: "276px",
                    height: "71px",
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
                  <img src={Tokopedia} alt="Tokopedia" />
                </Button>
              </Link>
            </Grid>
          )}
          <Grid item sx={{ marginTop: "20px" }}>
            {" "}
            {/* Instagram Button */}
            <Link
              href="https://shopee.co.id/"
              target="_blank"
              sx={{
                textDecoration: "none",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  borderRadius: "60px",
                  border: "2px solid #000000",
                  color: "#000000",
                  background: "#FFFFFF",
                  width: "276px",
                  height: "71px",
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:active": {
                    background: "#bbcede",
                  },
                  "&:hover": {
                    background: "#bbcede",
                  },
                }}
              >
                <Instagram />{" "}
                <Typography
                  sx={{
                    textDecoration: "none",
                    fontSize: "24px",
                    fontWeight: 600,
                    fontFamily: "'Raleway', sans-serif",
                    lineHeight: `${matches ? "" : "100%"}`,
                    marginLeft: "12px",
                  }}
                >
                  Instagram
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>

      <div
        id="contact"
        style={{
          margin: matches ? "60px 0" : "60px 0 10px 0",
          padding: `${matches ? "0 120px" : "0 32px"}`,
          scrollBehavior: "smooth",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: 800,
                fontFamily: "'Raleway', sans-serif",
                textAlign: matches ? "center" : "start",
                lineHeight: `${matches ? "" : "100%"}`,
              }}
            >
              You have any questions?
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                fontFamily: "'Raleway', sans-serif",
                textAlign: "start",
                lineHeight: `${matches ? "" : "163%"}`,
                marginTop: "20px",
              }}
            >
              Please don’t be hesitate to {!matches && <br />}contact us
            </Typography>
          </Grid>
          {matches && (
            <Grid item sx={{ marginTop: "40px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Phone Button 1 Desktop */}
                <Link
                  href="https://shopee.co.id/"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "60px",
                      color: "#000000",
                      background: "#D9D9D9",
                      width: "276px",
                      height: "71px",
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:active": {
                        background: "#bbcede",
                      },
                      "&:hover": {
                        background: "#bbcede",
                      },
                    }}
                  >
                    <Whatsapp />
                    <Typography
                      sx={{
                        textDecoration: "none",
                        fontSize: "18px",
                        fontWeight: 600,
                        fontFamily: "'Mulish', sans-serif",
                        lineHeight: `${matches ? "" : "100%"}`,
                        marginLeft: "12px",
                      }}
                    >
                      0812-xxxx-xxxx
                    </Typography>
                  </Button>
                </Link>
                {/* Phone Button 2 Desktop */}
                <Link
                  href="https://shopee.co.id/"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    marginLeft: "15px",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "60px",
                      color: "#000000",
                      background: "#D9D9D9",
                      width: "276px",
                      height: "71px",
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:active": {
                        background: "#bbcede",
                      },
                      "&:hover": {
                        background: "#bbcede",
                      },
                    }}
                  >
                    <Whatsapp />
                    <Typography
                      sx={{
                        textDecoration: "none",
                        fontSize: "18px",
                        fontWeight: 600,
                        fontFamily: "'Mulish', sans-serif",
                        lineHeight: `${matches ? "" : "100%"}`,
                        marginLeft: "12px",
                      }}
                    >
                      0812-xxxx-xxxx
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Grid>
          )}
          {!matches && (
            <Grid item sx={{ marginTop: "40px" }}>
              {" "}
              {/* Phone Button 1 Mobile */}
              <Link
                href="https://shopee.co.id/"
                target="_blank"
                sx={{
                  textDecoration: "none",
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "60px",
                    color: "#000000",
                    background: "#D9D9D9",
                    width: "276px",
                    height: "71px",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:active": {
                      background: "#bbcede",
                    },
                    "&:hover": {
                      background: "#bbcede",
                    },
                  }}
                >
                  <Whatsapp />
                  <Typography
                    sx={{
                      textDecoration: "none",
                      fontSize: "18px",
                      fontWeight: 600,
                      fontFamily: "'Mulish', sans-serif",
                      lineHeight: `${matches ? "" : "100%"}`,
                      marginLeft: "12px",
                    }}
                  >
                    0812-xxxx-xxxx
                  </Typography>
                </Button>
              </Link>
            </Grid>
          )}
          {!matches && (
            <Grid item sx={{ marginTop: "20px" }}>
              {" "}
              {/* Phone Button 2 Mobile */}
              <Link
                href="https://shopee.co.id/"
                target="_blank"
                sx={{
                  textDecoration: "none",
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "60px",
                    color: "#000000",
                    background: "#D9D9D9",
                    width: "276px",
                    height: "71px",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:active": {
                      background: "#bbcede",
                    },
                    "&:hover": {
                      background: "#bbcede",
                    },
                  }}
                >
                  <Whatsapp />
                  <Typography
                    sx={{
                      textDecoration: "none",
                      fontSize: "18px",
                      fontWeight: 600,
                      fontFamily: "'Mulish', sans-serif",
                      lineHeight: `${matches ? "" : "100%"}`,
                      marginLeft: "12px",
                    }}
                  >
                    0812-xxxx-xxxx
                  </Typography>
                </Button>
              </Link>
            </Grid>
          )}
          <Grid item sx={{ marginTop: "20px" }}>
            {" "}
            {/* Email Button */}
            <Link
              href="https://shopee.co.id/"
              target="_blank"
              sx={{
                textDecoration: "none",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  borderRadius: "60px",
                  color: "#000000",
                  background: "#D9D9D9",
                  width: "276px",
                  height: "71px",
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:active": {
                    background: "#bbcede",
                  },
                  "&:hover": {
                    background: "#bbcede",
                  },
                }}
              >
                <Mail />
                <Typography
                  sx={{
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "'Mulish', sans-serif",
                    lineHeight: `${matches ? "" : "100%"}`,
                    marginLeft: "12px",
                  }}
                >
                  clothbrew@gmail.com
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      {matches && (
        <div
          style={{
            padding: `${matches ? "0 120px" : "0 32px"}`,
            paddingTop: "56px",
            paddingBottom: "88px",
            backgroundColor: "#DAE3EA",
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={LogoDark} alt="Logo" style={{ width: "30px" }} />

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000000",
                    marginLeft: "10px",
                    letterSpacing: "0.1em",
                    fontFamiy: "'Mulish', sans-serif",
                  }}
                >
                  CLOTHBREW
                </Typography>
              </div>

              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#000000",
                  fontFamily: "'Mulish', sans-serif",
                  marginTop: "12px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod ut labore et dolore magna aliqua.{" "}
              </Typography>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontFamily: "'Mulish', sans-serif",
                  marginTop: "20px",
                }}
              >
                <Instagram style={{ marginRight: "8px", width: "20px" }} />{" "}
                @clothbrew
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Typography
                sx={{
                  textDecoration: "none",
                  color: "#000000",
                  display: "flex",
                  fontWeight: "600",
                  alignItems: "center",
                  fontFamily: "'Mulish', sans-serif",
                }}
              >
                Category
              </Typography>
              <Grid
                container
                direction="column"
                style={{
                  marginTop: "20px",
                }}
              >
                <Grid item sx={{ marginBottom: "8px" }}>
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                      fontFamily: "'Mulish', sans-serif",
                    }}
                  >
                    Best Seller
                  </Link>
                </Grid>
                <Grid item sx={{ marginBottom: "8px" }}>
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                      fontFamily: "'Mulish', sans-serif",
                      marginTop: "8px",
                    }}
                  >
                    Shirts
                  </Link>
                </Grid>
                <Grid item sx={{ marginBottom: "8px" }}>
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                      fontFamily: "'Mulish', sans-serif",
                      marginTop: "8px",
                    }}
                  >
                    Machine
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                      fontFamily: "'Mulish', sans-serif",
                      marginTop: "8px",
                    }}
                  >
                    Beans
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{
                  textDecoration: "none",
                  color: "#000000",
                  display: "flex",
                  fontWeight: "600",
                  alignItems: "center",
                  fontFamily: "'Mulish', sans-serif",
                }}
              >
                Information
              </Typography>
              <Grid
                container
                direction="column"
                style={{
                  marginTop: "20px",
                }}
              >
                <Grid item sx={{ marginBottom: "8px" }}>
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                      fontFamily: "'Mulish', sans-serif",
                    }}
                  >
                    Contact
                  </Link>
                </Grid>
                <Grid item sx={{ marginBottom: "8px" }}>
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "#000000",
                      cursor: "pointer",
                      fontFamily: "'Mulish', sans-serif",
                      marginTop: "8px",
                    }}
                  >
                    Why Us
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-end"
            sx={{
              borderTop: "2px solid #FFFFFF",
              paddingTop: "20px",
              marginTop: "40px",
            }}
          >
            <Grid item>
              <Typography
                sx={{
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: "'Mulish', sans-serif",
                }}
              >
                0812-xxxx-xxxx
              </Typography>
            </Grid>
            <Grid item sx={{ marginLeft: "20px" }}>
              <Link>
                <Facebook style={{ width: "20px", fill: "#6D7D8B" }} />
              </Link>
            </Grid>
            <Grid item sx={{ marginLeft: "20px" }}>
              <Link>
                <Instagram style={{ width: "20px", fill: "#6D7D8B" }} />
              </Link>
            </Grid>
            <Grid item sx={{ marginLeft: "20px" }}>
              <Link>
                <Twitter style={{ width: "20px", fill: "#6D7D8B" }} />
              </Link>
            </Grid>
          </Grid>
        </div>
      )}
      {!matches && (
        <div
          style={{
            padding: `${matches ? "0 120px" : "0 32px"}`,
            marginTop: "50px",
            background: "#80452C",
          }}
        >
          <Grid container justifyContent="center" sx={{ padding: "20px 0" }}>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <img src={ClothBrew} alt="ClothBrew Logo" />
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      marginLeft: "10px",
                      letterSpacing: "0.1em",
                      fontFamiy: "'Mulish', sans-serif",
                    }}
                  >
                    CLOTHBREW
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "24px" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      marginLeft: "10px",
                      letterSpacing: "0.1em",
                      fontFamiy: "'Mulish', sans-serif",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item sx={{ marginLeft: "20px" }}>
                      <Link>
                        <Facebook style={{ width: "20px", fill: "#FFFFFF" }} />
                      </Link>
                    </Grid>
                    <Grid item sx={{ marginLeft: "20px" }}>
                      <Link>
                        <Instagram style={{ width: "20px", fill: "#FFFFFF" }} />
                      </Link>
                    </Grid>
                    <Grid item sx={{ marginLeft: "20px" }}>
                      <Link>
                        <Twitter style={{ width: "20px", fill: "#FFFFFF" }} />
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

export default App;
