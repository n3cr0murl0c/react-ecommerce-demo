import React from "react";
// import cssStyles from "./Hero.module.scss";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  // IconButton,
} from "@mui/material";

import heroBg from "../../assets/images/scandinavian-interior-mockup-wall-decal-background.png";

export default function Hero({ english }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    mobile: {
      wrapper: {
        height: "calc(650px - 80px)",
        // maxHeight: "calc(100% - 80px)",
        width: "100%",
        // backgroundColor: "papayawhip",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        // backgroundSize:"",
        position: "relative",
        m: 0,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      },
      HeroContainer: {
        // border: "3px solid whitesmoke",
        // width: "100%",
        position: "absolute",
        right: "10%",
        top: "20%",
        overflowX: "hidden",
        height: "285px",
        // maxHeight: "520px",
        maxWidth: "275px",
        minWidth: "0",
        backgroundColor: "#FFF3E3",
        textAlign: "center",
        p: 1,
        mx: "auto",
        overflow: "hidden",
      },
      txtHeader: {
        fontSize: "2rem",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "700",
        textAlign: "start",
        lineHeight: "1.75rem",
        // my: 3,
        color: "primary.main",
      },
      txtCaption: {
        fontSize: "0.9rem",
        fontFamily: "Mulish, sans-serif",
        fontWeight: "500",
        color: "#767676",
        // lineHeight: "66px",
        textAlign: "start",
        my: 1,
      },
      txtAccent: {
        fontSize: "1rem",
        fontFamily: "Mulish, sans-serif",
        fontWeight: "500",
        color: "#767676",
        textAlign: "start",
        // lineHeight: "66px",
        my: 1,
      },
    },
    wrapper: {
      // height: "calc(100%-80px)",
      height: "700px",
      // maxHeight: "calc(100% - 80px)",
      // width: "100%",
      // backgroundColor: "papayawhip",
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      // backgroundSize:"",
      position: "relative",
      // overflow: "auto",
      // m: 0,
      // p: 0,
    },

    HeroContainer: {
      // border: "3px solid whitesmoke",
      // width: "100%",
      position: "absolute",
      right: "6.5%",
      top: "10%",
      overflowX: "hidden",
      // height: "720px",
      height: "443px",
      width: "643px",
      backgroundColor: "#FFF3E3",
      textAlign: "center",
      p: 6,
      overflow: "hidden",
    },

    heroContent: {
      display: "flex",
      width: "100%",
      p: 3,
      m: 2,
      flexDirection: "column",
      height: "calc(100%-80px)",
      textAlign: "start",
      flexGrow: "1",
      flexWrap: "wrap",
      // gap: "1}0px",
      overflow: "hidden",
    },
    heroMain: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",

      // p: 3,
    },
    txtHeader: {
      fontSize: "3.5rem",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "700",
      textAlign: "start",
      lineHeight: "3.5rem",
      // my: 3,
      color: "primary.main",
    },
    txtCaption: {
      fontSize: "1.5rem",
      fontFamily: "Mulish, sans-serif",
      fontWeight: "500",
      color: "#767676",
      // lineHeight: "66px",
      textAlign: "start",
      my: 1,
    },
    txtAccent: {
      fontSize: "1.5rem",
      fontFamily: "Mulish, sans-serif",
      fontWeight: "500",
      color: "#767676",
      textAlign: "start",
      // lineHeight: "66px",
      my: 3,
    },
  };
  return (
    // <div className={styles.Hero}>Hero Works</div>
    <React.Fragment>
      {isMobile ? (
        <Box sx={styles.mobile.wrapper} component="section" id="hero">
          <Box
            maxWidth="lg"
            component={"div"}
            name="HeroContainerMobile"
            sx={styles.mobile.HeroContainer}
          >
            <Box name="heroContent" sx={styles.textMobile}>
              <Typography sx={styles.mobile.txtAccent}>
                {english ? "New Arrival" : "Nuevos Productos"}
              </Typography>
              <Typography sx={styles.mobile.txtHeader}>
                {english ? "Discover our" : "Descubre nuestra"} <br />{" "}
                {english ? "New Collection" : "Nueva Colección"}
              </Typography>
              <Typography sx={styles.mobile.txtCaption}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </Typography>
            </Box>
            <Box name="heroAction">
              <Button variant="contained" size="small">
                {english ? "Buy Now" : "Comprar Ahora"}
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={styles.wrapper} component="section" id="hero">
            <Box
              maxWidth="lg"
              component={"div"}
              name="HeroContainer"
              sx={styles.HeroContainer}
            >
              <Box name="heroContent">
                <Typography sx={styles.txtAccent}>
                  {english ? "New Arrival" : "Nuevos Productos"}
                </Typography>
                <Typography sx={styles.txtHeader}>
                  {english ? "Discover our" : "Descubre nuestra"} <br />{" "}
                  {english ? "New Collection" : "Nueva Colección"}
                </Typography>
                <Typography sx={styles.txtCaption}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </Typography>
              </Box>
              <Box name="heroAction">
                <Button variant="contained">
                  {english ? "Buy Now" : "Comprar Ahora"}
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </React.Fragment>
  );
}
Hero.propTypes = {
  english: PropTypes.bool,
};

Hero.defaultProps = {};
