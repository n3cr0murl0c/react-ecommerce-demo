import React from "react";
// import styles from "./Breacrumb.module.scss";
import PropTypes from "prop-types";
import bg from "../../../assets/images/Rectangle_breadcrumb.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Breadcrumbs, Container, Typography, Link } from "@mui/material";
export default function Breacrumb({ entitle, estitle, parentTitle, english }) {
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    Breacrumb: {
      // border: "1px solid white",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",

      // height: "4rem",
    },
  };
  // console.log(parent);
  return (
    // <div className={styles.Breacrumb}>Breacrumb Works</div>
    <React.Fragment>
      <Box component="section" sx={styles.Breacrumb} id="breadCrumb">
        <Container sx={{ textAlign: "center", p: 1, my: 0 }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "2rem",
              my: "auto",
            }}
          >
            {english ? entitle : estitle}
          </Typography>

          <Box>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                textAlign: "center",
                mx: "auto",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Link underline="hover" color="inherit" href="/">
                {english ? "Home" : "Inicio"}
              </Link>
              {parentTitle ? (
                <Link underline="hover" color="inherit" href="/">
                  {parentTitle}
                </Link>
              ) : (
                <Typography color="text.primary">
                  {english ? entitle : estitle}
                </Typography>
              )}
            </Breadcrumbs>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
Breacrumb.propTypes = {
  entitle: PropTypes.string,
  estitle: PropTypes.string,
  parentTitle: PropTypes.string,
  english: PropTypes.bool,
};

Breacrumb.defaultProps = {
  entitle: "Shop",
  estitle: "Tienda",
  parentTitle: "",
};
