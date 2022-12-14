import {
  Grid,
  Typography,
  Link,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import ClothBrew from "../../assets/images/Logo.png";
import LogoSmall from "../../assets/images/LogoSmall.png";
import { ReactComponent as Heart } from "../../assets/icons/Heart.svg";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as Cart } from "../../assets/icons/Cart.svg";
import { ReactComponent as Burger } from "../../assets/icons/Burger.svg";
import { ReactComponent as Cross } from "../../assets/icons/Cross.svg";

const styles = {
  links: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamiy: "'Mulish', sans-serif",
    cursor: "pointer",
    fontWeight: 500,
  },
};

const NavigationBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ paddingTop: "25px", position: "relative" }}
    >
      {matches ? (
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
      ) : (
        <Grid item>
          <Burger onClick={() => setOpen(true)} />
        </Grid>
      )}
      {matches ? (
        <Grid xs item container justifyContent="flex-end" alignItems="center">
          <Grid item>
            <Link href="#catalogue" sx={styles.links}>
              Catalogue
            </Link>
          </Grid>
          <Grid item sx={{ marginLeft: "40px" }}>
            <Link href="#find" sx={styles.links}>
              Find us
            </Link>
          </Grid>
          <Grid item sx={{ marginLeft: "40px" }}>
            <Link sx={styles.links}>
              <IconButton>
                <Search />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      ) : (
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
      )}
      {!matches && open && (
        <div
          style={{
            position: "absolute",
            top: 0,
            padding: "30px 0 0 0",
            left: "-30px",
            background:
              "linear-gradient(335.26deg, #614626 0.98%, #3D2D1A 24.7%, #130F0B 100%)",
            borderRadius: "0px 0px 16px 0px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "168px",
          }}
        >
          <Grid container sx={{ marginLeft: "32px" }}>
            <Grid xs={12} item>
              <Cross onClick={() => setOpen(false)} />
            </Grid>
            <Grid xs={12} item sx={{ marginTop: "22px" }}>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href="#catalogue"
                onClick={() => setOpen(false)}
              >
                <Typography
                  sx={{
                    fontFamily: "'Mulish', sans-serif",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  Catalogue
                </Typography>
              </Link>
            </Grid>
            <Grid xs={12} item sx={{ marginTop: "4px" }}>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                // href="#catalogue"
                onClick={() => setOpen(false)}
              >
                <Typography
                  sx={{
                    fontFamily: "'Mulish', sans-serif",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  Search
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid container sx={{ paddingLeft: "32px", background: "#231B1B", paddingBottom: "22px", borderRadius: "0 0 16px 0", marginTop: "15px" }}>
            <Grid xs={12} item sx={{ marginTop: "15px" }}>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href="#contact"
                onClick={() => setOpen(false)}
              >
                <Typography
                  sx={{
                    fontFamily: "'Mulish', sans-serif",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  Value
                </Typography>
              </Link>
            </Grid>
            <Grid xs={12} item sx={{ marginTop: "4px" }}>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                href="#find"
                onClick={() => setOpen(false)}
              >
                <Typography
                  sx={{
                    fontFamily: "'Mulish', sans-serif",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  Find Us
                </Typography>
              </Link>
            </Grid>
            <Grid xs={12} item sx={{ marginTop: "20px" }}>
              <img src={LogoSmall} />
            </Grid>
          </Grid>
        </div>
      )}
    </Grid>
  );
};

export default NavigationBar;
