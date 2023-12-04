import React from "react";
// import styles from "./Shop.module.scss";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Breacrumb from "./Breacrumb/Breacrumb";
import customTheme from "../../config/theme";
import ShopProducts from "./ShopProducts/ShopProducts";
export default function Shop({
  english,
  handleEnglish,
  favoriteList,
  cartList,
  handleFavoriteList,
  handleCartList,
  productList,
  handleProducts,
}) {
  const [listView, setListView] = React.useState(false);
  // const [gridView, setGridView] = React.useState(true);
  const [numberShow, setNumberShow] = React.useState(0);
  const [sortBy, setSortBy] = React.useState(1);
  const orderTypes = [
    // { id: 0, value: "", active: true },
    { id: 1, value: "Precio Asc" },
    { id: 2, value: "Precio Desc" },
    { id: 3, value: "Nuevo Asc" },
    { id: 4, value: "Nuevo Desc" },
  ];
  const handleOrderChange = (data) => {
    // console.log(
    //   "en handleOrderChange en shopProducts",
    //   "valor seleccionado-> ",
    //   data
    // );
    if (data === 1) {
      console.log("Precio Asc");
      setSortBy(data);
      handleProducts("order", data);
    } else if (data === 2) {
      console.log("Precio Desc");
      setSortBy(data);
      handleProducts("order", data);
    } else if (data === 3) {
      console.log("Nuevo Asc");
      setSortBy(data);
      handleProducts("order", data);
    } else if (data === 4) {
      console.log("Nuevo Desc");
      setSortBy(data);
      handleProducts("order", data);
    }
    // setSortBy((prev)=>{...prev,prev})
  };
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Navbar
          brand="Furniro"
          english={english}
          handleEnglish={handleEnglish}
          // spanish={spanish}
          // handleSpanish={setSpanish}
          favorites={favoriteList}
          cart={cartList}
        />
        <Breacrumb english={english} />

        <ShopProducts
          english={english}
          products={productList}
          favoriteList={favoriteList}
          cartList={cartList}
          handleFavoriteList={handleFavoriteList}
          handleCartList={handleCartList}
          listView={listView}
          setListView={setListView}
          numberShow={numberShow}
          setNumberShow={setNumberShow}
          sortBy={sortBy}
          orderTypes={orderTypes}
          handleOrderChange={handleOrderChange}
          handleProducts={handleProducts}
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
  handleProducts: PropTypes.func,
  productList: PropTypes.array,
};

Shop.defaultProps = {};
