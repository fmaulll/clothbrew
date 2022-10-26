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
import BgMobile from "./assets/images/BgMobile.png";
import BackgroundBottomHero from "./assets/images/Hero-Bottom.png";
// import BottomHeroMobile from "./assets/images/Background-Hero-Bottom.png";
import BottomHeroMobile from "./assets/images/BottomHeroMobile2.png";
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
import { ReactComponent as Mail } from "./assets/icons/MailWhite.svg";
import LogoDark from "./assets/images/Logo-Dark.png";
import { ReactComponent as Instagram } from "./assets/icons/Instagram.svg";
import { ReactComponent as Facebook } from "./assets/icons/Facebook.svg";
import { ReactComponent as Twitter } from "./assets/icons/Twitter.svg";
import ClothBrew from "./assets/images/Logo.png";
import { ReactComponent as Delivery } from "./assets/icons/Delivery.svg";
import { ReactComponent as Protection } from "./assets/icons/Protection.svg";
import { ReactComponent as Favorite } from "./assets/icons/Favorite.svg";
import { ReactComponent as Recycling } from "./assets/icons/Recycling.svg";
import RectangleBg from "./assets/images/RectangleBg.png";
import BaristaImage from "./assets/images/BaristaImage.png";
import BaristaMobile from "./assets/images/BaristaMobile.png";

const services = [
  {
    icon: <Delivery />,
    title: "Fast Delivery",
    subTitle: "CUSTOMER COMES FIRST",
    description:
      "Kurang puas dengan produk JB? Balikiin aja! Kita refund uangmu 100%!",
  },
  {
    icon: <Protection />,
    title: "Garansi Kepuasan",
    subTitle: "PASSION BEFORE MONEY",
    description:
      "Kurang puas dengan produk JB? Balikiin aja! Kita refund uangmu 100%!",
  },
  {
    icon: <Favorite />,
    title: "Local Pride",
    subTitle: "EAGER TO GROWTH",
    description:
      "Kurang puas dengan produk JB? Balikiin aja! Kita refund uangmu 100%!",
  },
  {
    icon: <Recycling />,
    title: "Tukar Size",
    subTitle: "PASSION BEFORE MONEY",
    description:
      "Kurang puas dengan produk JB? Balikiin aja! Kita refund uangmu 100%!",
  },
];

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
          backgroundImage: `url(${matches ? BackgroundHero : BgMobile})`,
          height: `${matches ? "100vh" : "591px"}`,
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
                lineHeight: `100%`,
              }}
            >
              {matches && `Your Outfit Express`}
              {!matches && (
                <>
                  Your {!matches && <br />}outfit {!matches && <br />}express
                </>
              )}
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
          <Grid item sx={{ marginTop: "20px" }}>
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
                  marginTop: `10px`,
                }}
              />
            </Typography>
          </Grid>
          <Grid
            item
            container
            sx={{ marginTop: `${matches ? "60px" : "36px"}` }}
            direction={matches ? "row" : "column"}
          >
            <Grid item>
              <Link href="#contact" sx={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "60px",
                    background: "#25313C",
                    color: "#FFFFFF",
                    width: "205px",
                    height: "56px",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:active": {
                      background: "#3c4c5b",
                    },
                    "&:hover": {
                      background: "#1d2730",
                    },
                  }}
                >
                  Our Tokopedia
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              sx={{
                marginLeft: matches ? "40px" : "0px",
                marginTop: matches ? "0px" : "16px",
              }}
            >
              <Link href="#contact" sx={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "60px",
                    background: "#25313C",
                    color: "#FFFFFF",
                    width: "205px",
                    height: "56px",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:active": {
                      background: "#3c4c5b",
                    },
                    "&:hover": {
                      background: "#1d2730",
                    },
                  }}
                >
                  Our Instagram
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundImage: `url(${
            matches ? BackgroundBottomHero : BottomHeroMobile
          })`,
          height: `${matches ? "225px" : "200px"}`,
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
          <br /> <span style={{ fontWeight: 700 }}>Caffeine</span> is one of
          those tools {!matches && <br />}that can break em.”
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
        </Grid>
      </div>
      {matches ? (
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: "60px", padding: "0 32px" }}
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
        // <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     marginTop: "55px",
        //   }}
        // >
        //   <div>
        //     <img src={PostOne} alt="PostOne" />
        //   </div>

        //   <img src={PostTwo} alt="PostTwo" />
        // </div>
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            marginTop: "55px",
            overflowX: "scroll",
            // width: "100%",
            padding: "0 32px",
          }}
        >
          <div>
            <img src={PostOne} alt="PostOne" />
          </div>
          <div>
            <img src={PostTwo} alt="PostTwo" />
          </div>
          <div>
            <img src={PostThree} alt="PostThree" />
          </div>
          <div>
            <img src={PostFour} alt="PostFour" />
          </div>
          <div>
            <img src={PostFive} alt="PostFive" />
          </div>
        </div>
      )}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction={matches ? "row" : "column"}
        sx={{ marginTop: "60px" }}
      >
        <Grid item>
          <Link sx={{ textDecoration: "none" }} href="#find">
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "60px",
                border: "1px solid #000000",
                color: "#25313C",
                background: "#FFFFFF",
                padding: "16px 36px",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
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
          </Link>
        </Grid>
        <Grid
          item
          sx={{
            marginLeft: matches ? "40px" : "0px",
            marginTop: matches ? "0px" : "20px",
          }}
        >
          <Link sx={{ textDecoration: "none" }} href="#find">
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "60px",
                border: "1px solid rgba(0, 0, 0, 0.4)",
                color: "#25313C",
                background: "#FFFFFF",
                padding: "11px 36px",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                "&:active": {
                  background: "#bbcede",
                },
                "&:hover": {
                  background: "#bbcede",
                },
              }}
            >
              <img
                style={{ height: "34.64px" }}
                src={Tokopedia}
                alt="Tokopedia"
              />
            </Button>
          </Link>
        </Grid>
      </Grid>
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
                color: "#25313C",
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
                        color: "#25313C",
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
                        color: "#25313C",
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
                        color: "#25313C",
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
                        color: "#25313C",
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
                    fontWeight: 700,
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
                      color: "#25313C",
                    }}
                    onClick={() => setFilterPrice(!filterPrice)}
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
                .sort((a, b) =>
                  (filterPrice ? a.value > b.value : a.value < b.value) ? 1 : -1
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
                          style={{
                            width: matches ? "100%" : "100%",
                            borderRadius: matches ? "20px" : "8px",
                          }}
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
        id="service"
        style={{
          margin: "60px 0",
          scrollBehavior: "smooth",
          position: "relative",
        }}
      >
        <Grid
          container
          alignItems={matches ? "center" : "flex-start"}
          direction="column"
          sx={{ padding: "0px 32px" }}
        >
          <Grid item>
            <Typography
              sx={{
                fontWeight: 800,
                fontFamily: "'Mulish', sans-serif",
                color: "#BEB70A",
              }}
            >
              SERVICES
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: "40px" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "'Mulish', sans-serif",
                fontSize: matches ? "48px" : "44px",
                color: "#25313C",
                textAlign: matches ? "center" : "start",
                lineHeight: "100%",
              }}
            >
              The Value We <br />
              Live By
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "'Raleway', sans-serif",
                fontSize: "16px",
                color: "#25313C",
                textAlign: matches ? "center" : "start",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et <br />
              dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>
        {matches && (
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={4}
            sx={{
              padding: "0px 120px 70px 120px",
              marginTop: "95px",
              position: "relative",
            }}
          >
            {services.map((item) => (
              <Grid item xs={3}>
                <Box
                  sx={{
                    padding: "0px 40px",
                    background: "#FFFFFF",
                    height: "230px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid container direction="column">
                    <Grid item>{item.icon}</Grid>
                    <Grid item sx={{ marginTop: "20px" }}>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontWeight: 700,
                          lineHeight: "30px",
                          color: "#25313C",
                          fontFamily: "'Mulish', sans-serif",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item sx={{ marginTop: "10px" }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "#6D7D8B",
                          fontFamily: "'Mulish', sans-serif",
                        }}
                      >
                        {item.subTitle}
                      </Typography>
                    </Grid>
                    <Grid item sx={{ marginTop: "10px" }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#25313C",
                          fontFamily: "'Mulish', sans-serif",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
            <img
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: "-1",
              }}
              src={RectangleBg}
            />
          </Grid>
        )}
        {!matches && (
          <Grid
            container
            sx={{
              background: "linear-gradient(180deg, #F1F9FF 0%, #FFF8F1 100%)",
              padding: "30px 32px",
              marginTop: "60px",
            }}
          >
            {services.map((item, index) => (
              <Grid item sx={{ marginTop: index !== 0 ? "40px" : "0px" }}>
                <Grid container direction="column" alignItems="center">
                  <Grid item>{item.icon}</Grid>
                  <Grid item sx={{ marginTop: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "30px",
                        color: "#25313C",
                        fontFamily: "'Mulish', sans-serif",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginTop: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#6D7D8B",
                        fontFamily: "'Mulish', sans-serif",
                      }}
                    >
                      {item.subTitle}
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginTop: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#25313C",
                        fontFamily: "'Mulish', sans-serif",
                        textAlign: "center",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
      <div
        id="contact"
        style={{
          margin: "100px 0",
          scrollBehavior: "smooth",
          position: "relative",
        }}
      >
        <Grid
          container
          alignItems={matches ? "center" : "flex-start"}
          direction="column"
          sx={{ padding: "0px 32px" }}
        >
          <Grid item>
            <Typography
              sx={{
                fontWeight: 800,
                fontFamily: "'Mulish', sans-serif",
                color: "#BEB70A",
              }}
            >
              CONTACT
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: "40px" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "'Mulish', sans-serif",
                fontSize: "48px",
                color: "#25313C",
                textAlign: matches ? "center" : "start",
                lineHeight: "100%",
              }}
            >
              Do you want to talk or <br />
              consult with us?
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "'Raleway', sans-serif",
                fontSize: "16px",
                color: "#25313C",
                textAlign: matches ? "center" : "start",
              }}
            >
              If you are looking for an answer or a coffee enthusiast, please
              don’t be <br />
              hesitate to contact us
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{ marginTop: matches ? "60px" : "0px" }}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item sx={{ padding: matches ? "40px 120px" : "40px 32px" }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "32px",
                        fontWeight: 800,
                        fontFamily: "'Mulish', sans-serif",
                        color: "#25313C",
                      }}
                    >
                      Phone Number
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginTop: "40px" }}>
                    <div
                      style={{ borderTop: "2px solid #25313C", width: "100px" }}
                    />
                  </Grid>
                  <Grid item sx={{ marginTop: "40px" }}>
                    <Grid container justifyContent="center" alignItems="center">
                      <Grid item>
                        <Link
                          href="https://api.whatsapp.com/send?phone=628121250200&text=Halo%20gan%2C%20mau%20tanya-tanya%20nih"
                          target="_blank"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          <Button
                            sx={{
                              textTransform: "none",
                              color: "#25313C",
                              borderRadius: matches ? "0px" : "60px",
                              boxShadow: matches
                                ? ""
                                : "0px 6px 8px rgba(127, 55, 55, 0.25)",
                              width: "296px",
                              height: "74px",
                              background: matches ? "none" : "#F1F9FF",
                              fontFamily: "'Raleway', sans-serif",
                              fontWeight: 600,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Whatsapp />
                            <Typography
                              sx={{
                                textDecoration: "none",
                                fontSize: matches ? "24px" : "18px",
                                fontWeight: 400,
                                fontFamily: "'Mulish', sans-serif",
                                marginLeft: "12px",
                              }}
                            >
                              0812-xxxx-xxxx
                            </Typography>
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item sx={{ marginTop: "40px" }}>
                        <Link
                          href="https://api.whatsapp.com/send?phone=628121250200&text=Halo%20gan%2C%20mau%20tanya-tanya%20nih"
                          target="_blank"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          <Button
                            sx={{
                              textTransform: "none",
                              color: "#25313C",
                              borderRadius: matches ? "0px" : "60px",
                              boxShadow: matches
                                ? ""
                                : "0px 6px 8px rgba(127, 55, 55, 0.25)",
                              width: "296px",
                              height: "74px",
                              background: "none",
                              fontFamily: "'Raleway', sans-serif",
                              fontWeight: 600,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Whatsapp />
                            <Typography
                              sx={{
                                textDecoration: "none",
                                fontSize: matches ? "24px" : "18px",
                                fontWeight: 400,
                                fontFamily: "'Mulish', sans-serif",
                                marginLeft: "12px",
                              }}
                            >
                              0812-xxxx-xxxx
                            </Typography>
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                sx={{
                  padding: matches ? "40px 120px" : "40px 32px",
                  background: "rgba(137, 92, 64, 0.05)",
                  boxShadow: "8px 6px 12px rgba(192, 40, 40, 0.08)",
                }}
              >
                <Grid container direction="column">
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "32px",
                        fontWeight: 800,
                        fontFamily: "'Mulish', sans-serif",
                        color: "#25313C",
                      }}
                    >
                      E-mail Address
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginTop: "40px" }}>
                    <div
                      style={{ borderTop: "2px solid #25313C", width: "100px" }}
                    />
                  </Grid>

                  <Grid item sx={{ marginTop: "40px" }}>
                    <Typography
                      sx={{
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 400,
                        fontFamily: "'Mulish', sans-serif",
                        color: "#25313C",
                      }}
                    >
                      clothbrew@gmail.com
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginTop: "40px" }}>
                    <Link
                      href="mailto:clothbrew@gmail.com"
                      target="_blank"
                      sx={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        sx={{
                          textTransform: "none",
                          borderRadius: "16px",
                          color: "#25313C",
                          background: "#208DB0",
                          width: "205px",
                          height: "64px",
                          fontFamily: "'Raleway', sans-serif",
                          fontWeight: 600,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "0px 6px 8px rgba(127, 55, 55, 0.25)",
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
                            color: "#FFFFFF",
                          }}
                        >
                          E-mail us
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "40px" }}>
            <img
              src={matches ? BaristaImage : BaristaMobile}
              style={{ width: matches ? "" : "100%" }}
              alt="barista preparing coffee"
            />
          </Grid>
        </Grid>
      </div>

      {matches && (
        <div
          style={{
            padding: `${matches ? "0 120px" : "0 32px"}`,
            paddingTop: "56px",
            paddingBottom: "88px",
            backgroundColor: "#FFF8F1",
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
                    color: "#25313C",
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
                  color: "#25313C",
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
                  color: "#25313C",
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
                  color: "#25313C",
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
                      color: "#25313C",
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
                      color: "#25313C",
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
                      color: "#25313C",
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
                      color: "#25313C",
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
                  color: "#25313C",
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
                      color: "#25313C",
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
                      color: "#25313C",
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
              borderTop: "2px solid #25313C",
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
            background: "#222847",
            height: "174px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
                    0813-xxx-xxx-xx
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
