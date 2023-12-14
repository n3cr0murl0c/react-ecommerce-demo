import React from "react";
// import styles from "./SingleProduct.module.scss";
import PropTypes from "prop-types";
import { Box, Divider } from "@mui/material";
import { useParams, useOutletContext } from "react-router-dom";
import ProductBreadcrumb from "./ProductBreadcrumb/ProductBreadcrumb";
import ProductControls from "./ProductControls/ProductControls";
export default function SingleProduct({ productList, setProductList }) {
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    SingleProduct: {
      // border: "1px dashed red",
    },
  };
  const { productId } = useParams();
  const product = productList.find((item) => item.id === parseInt(productId));

  const [cartList, favoriteList, handleCartList, handleFavoriteList, english] =
    useOutletContext();
  // console.log(english);
  return (
    <React.Fragment>
      <Box
        component="main"
        id={"product" + product.id}
        sx={styles.SingleProduct}
      >
        <ProductBreadcrumb parentTitle={"Shop"} product={product} />
        <ProductControls
          english={english}
          handleAddToCart={handleCartList}
          handleAddToWishList={handleFavoriteList}
          product={product}
          cartList={cartList}
          favoriteList={favoriteList}
          setProductList={setProductList}
        />
        <Divider />
      </Box>
    </React.Fragment>
  );
}
SingleProduct.propTypes = {
  productList: PropTypes.array,
  setProductList: PropTypes.func,
};

SingleProduct.defaultProps = {};
