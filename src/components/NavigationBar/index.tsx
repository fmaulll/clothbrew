import { Grid, Typography, Link, IconButton } from "@mui/material";
import React from "react";
import ClothBrew from "../../assets/images/Logo.png";
import Heart from "../../assets/icons/Heart.png";
import Search from "../../assets/icons/Search.png";

const styles = {
  links: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamiy: "'Mulish', sans-serif",
    cursor: "pointer",
  },
};

const NavigationBar = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ paddingTop: "25px" }}
    >
      <Grid xs item container alignItems="center">
        <Grid item>
          <img src={ClothBrew} alt="ClothBrew Logo" />
        </Grid>
        <Grid item>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 500, color: "#FFFFFF", marginLeft: "10px", letterSpacing: "0.1em" }}
          >
            CLOTHBREW
          </Typography>
        </Grid>
      </Grid>
      <Grid xs item container justifyContent="flex-end" alignItems="center">
        <Grid item>
          <Link sx={styles.links}>Catalogue</Link>
        </Grid>
        <Grid item sx={{ marginLeft: "40px" }}>
          <Link sx={styles.links}>Find us</Link>
        </Grid>
        <Grid item sx={{ marginLeft: "40px" }}>
          <Link sx={styles.links}>
            <IconButton>
              <img style={{ width: "20px" }} src={Heart} alt="Heart" />
            </IconButton>
          </Link>
        </Grid>
        <Grid item sx={{ marginLeft: "40px" }}>
          <Link sx={styles.links}>
            <IconButton>
              <img style={{ width: "16px" }} src={Search} alt="Search" />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavigationBar;
