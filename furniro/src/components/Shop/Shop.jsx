// import React from "react";
// import styles from "./Shop.module.scss";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import customTheme from "../../config/theme";
import Products from "../Products/Products";
export default function Shop({
  english,

  favoriteList,
  cartList,
  handleSetEnglish,
  handleFavoriteList,
  handleCartList,
  productList,
}) {
  /** @type{import('@mui/material').SxProps}*/

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Navbar
          brand="Furniro"
          english={english}
          handleEnglish={handleSetEnglish}
          // spanish={spanish}
          // handleSpanish={setSpanish}
          favorites={favoriteList}
          cart={cartList}
        />

        <Products
          english={english}
          products={productList}
          handleFavoriteList={handleFavoriteList}
          handleCartList={handleCartList}
        />
      </ThemeProvider>
    </>
  );
}
Shop.propTypes = {
  english: PropTypes.bool,
  handleEnglish: PropTypes.func,
  favoriteList: PropTypes.array,
  cartList: PropTypes.array,
  handleSetEnglish: PropTypes.func,
  handleFavoriteList: PropTypes.func,
  handleCartList: PropTypes.func,
  productList: PropTypes.array,
};

Shop.defaultProps = {};
