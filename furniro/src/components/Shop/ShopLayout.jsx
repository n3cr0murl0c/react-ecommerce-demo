import React from "react";
// import styles from "./Shop.module.scss";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";

import customTheme from "../../config/theme";

import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
export default function ShopLayout({
  english,
  handleEnglish,
  favoriteList,
  cartList,
  handleFavoriteList,
  handleCartList,
}) {
  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Navbar
          brand="Furniro"
          english={english}
          handleEnglish={handleEnglish}
          favorites={favoriteList}
          cart={cartList}
        />

        <Outlet
          context={[
            cartList,
            favoriteList,
            handleCartList,
            handleFavoriteList,
            english,
          ]}
        />
        <Footer english={english} />
      </ThemeProvider>
    </React.Fragment>
  );
}
ShopLayout.propTypes = {
  english: PropTypes.bool,
  handleEnglish: PropTypes.func,
  favoriteList: PropTypes.array,
  cartList: PropTypes.array,
  handleSetEnglish: PropTypes.func,
  handleFavoriteList: PropTypes.func,
  handleCartList: PropTypes.func,
  handleProducts: PropTypes.func,
  productList: PropTypes.array,
};

ShopLayout.defaultProps = {};
