import {
  Grid,
  Typography,
  Link,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import ClothBrew from "../../assets/images/Logo.png";
import { ReactComponent as Heart } from "../../assets/icons/Heart.svg";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as Cart } from "../../assets/icons/Cart.svg";
import { ReactComponent as Burger } from "../../assets/icons/Burger.svg";

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
  const matches = useMediaQuery("(min-width:600px)");
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
      {matches ? (
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
                <Heart style={{ fill: "#FFFFFF" }} />
              </IconButton>
            </Link>
          </Grid>
          <Grid item sx={{ marginLeft: "40px" }}>
            <Link sx={styles.links}>
              <IconButton>
                <Search style={{ fill: "#FFFFFF" }} />
              </IconButton>
            </Link>
          </Grid>
          <Grid item sx={{ marginLeft: "40px" }}>
            <Link sx={styles.links}>
              <IconButton>
                <Cart style={{ fill: "#FFFFFF" }} />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid item>
          <Burger />
        </Grid>
      )}
    </Grid>
  );
};

export default NavigationBar;
