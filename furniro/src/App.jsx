// import React from "react";
import Navbar from "./components/Navbar/Navbar";
import PropTypes from "prop-types";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Browse from "./components/Browse/Browse";
import customTheme from "./config/theme";

function App({
  english,
  favoriteList,
  cartList,
  handleSetEnglish,
  handleFavoriteList,
  handleCartList,
  productList,
}) {
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
        <Hero english={english} />
        <Browse english={english} />
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

App.propTypes = {
  english: PropTypes.bool,
  handleEnglish: PropTypes.func,
  favoriteList: PropTypes.array,
  cartList: PropTypes.array,
  handleSetEnglish: PropTypes.func,
  handleFavoriteList: PropTypes.func,
  handleCartList: PropTypes.func,
  productList: PropTypes.array,
};
export default App;
