import React from "react";
// import styles from "./ShopProducts.module.scss";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Menu from "./Menu/Menu";

import ProductsShop from "./ProductsShop/ProductsShop";
export default function ShopProducts({
  english,
  handleEnglish,
  favoriteList,
  cartList,
  listView,
  products,
  setListView,
  numberShow,
  setNumberShow,
  sortBy,
  orderTypes,
  handleOrderChange,
}) {
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    ShopProducts: {
      // border: "1px dashed red",
      my: 0,
    },
  };

  return (
    // <div className={styles.ShopProducts}>ShopProducts Works</div>
    <React.Fragment>
      <Box component="section" sx={styles.ShopProducts}>
        <Menu
          english={english}
          handleEnglish={handleEnglish}
          favoriteList={favoriteList}
          cartList={cartList}
          listView={listView}
          setListView={setListView}
          numberShow={numberShow}
          setNumberShow={setNumberShow}
          sortBy={sortBy}
          orderTypes={orderTypes}
          handleOrderChange={handleOrderChange}
        />
        <ProductsShop products={products} english={english} />
      </Box>
    </React.Fragment>
  );
}
ShopProducts.propTypes = {
  title: PropTypes.string,
  english: PropTypes.bool,
  handleEnglish: PropTypes.func,
  favoriteList: PropTypes.array,
  cartList: PropTypes.array,

  products: PropTypes.array,

  listView: PropTypes.bool,
  gridView: PropTypes.bool,
  setGridView: PropTypes.func,
  setListView: PropTypes.func,

  numberShow: PropTypes.number,
  setNumberShow: PropTypes.func,
  sortBy: PropTypes.number,
  orderTypes: PropTypes.array,
  handleOrderChange: PropTypes.func,
};

ShopProducts.defaultProps = { title: "ShopProducts" };
