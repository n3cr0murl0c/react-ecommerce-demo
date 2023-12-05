// import React from "react";
import Navbar from "./components/Navbar/Navbar";
import PropTypes from "prop-types";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Browse from "./components/Browse/Browse";
import customTheme from "./config/theme";
// import Slideshow from "./components/Slideshow/Slideshow";
import Collage from "./components/Collage/Collage";
// import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
function App({
  english,
  favoriteList,
  cartList,
  handleEnglish,
  handleFavoriteList,
  handleCartList,
  productList,
  addItem,
  // setEnglish,
}) {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Navbar
          brand="Furniro"
          english={english}
          handleEnglish={handleEnglish}
          // setEnglish={setEnglish}
          favorites={favoriteList}
          cart={cartList}
        />
        <Box component={"main"} sx={{ m: 0, p: 0 }}>
          <Hero english={english} />
          <Browse english={english} />
          <Products
            english={english}
            products={productList}
            handleFavoriteList={handleFavoriteList}
            handleCartList={handleCartList}
            addItem={addItem}
          />
          {/* <Slideshow english={english} /> */}
          <Collage english={english} />
          {/* <Footer english={english} /> */}
        </Box>
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
  addItem: PropTypes.func,
  // setEnglish: PropTypes.func,
  productList: PropTypes.array,
};
export default App;
