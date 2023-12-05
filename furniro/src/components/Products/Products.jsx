import React from "react";
// import styles from "./Products.module.scss";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  // useMediaQuery,
  useTheme,
} from "@mui/material";

import ProductCard from "../Shop/ShopProducts/ProductCard/ProductCard";
export default function Products({
  english,
  products,
  handleFavoriteList,
  addItem,
}) {
  const theme = useTheme();

  // const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  /** @type{import('@mui/material').SxProps}*/

  const styles = {
    Products: {
      // border: "1px dashed red",
      my: 3,
      height: "100%",
    },
    productsWrapper: { m: 3, height: "100%" },
    productList: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "stretch",
      // flexShrink: "1",
      gap: 1,
      p: 2,
      my: 1,
      border: "3px solid whitesmoke",
      height: "100%",
      overflowX: "hidden",
      overflowY: "auto",
      [theme.breakpoints.down("sm")]: {
        alignContent: "flex-start",
        overflowX: "hidden",
        overflowY: "auto",
        // maxHeight: "100%",
        height: "650px",
        // touchAction: "pan-y",
      },
    },
    header: {
      textAlign: "center",
      fontSize: "2.5rem",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "700",
      lineHeight: "3.5rem",
      // my: 3,
      color: "text.black",
    },
  };
  // const handleFlipCard = (e) => {
  //   console.log("hover event ENTER on: ", e.target.id);
  // };
  return (
    // <div className={styles.Products}>Products Works</div>
    <React.Fragment>
      <Box component="section" sx={styles.Products} id="productos">
        <Box>
          <Typography variant="h1" sx={styles.header}>
            {english ? "Our Products" : "Nuestros Productos"}
          </Typography>
        </Box>
        <Box sx={styles.productsWrapper}>
          <Box sx={styles.productList}>
            {products.length !== 0
              ? products
                  .filter((i) => i.new === true)
                  .slice(-4)
                  .map((item) => {
                    return (
                      <ProductCard
                        item={item}
                        key={item.id}
                        english={english}
                        handleFavoriteList={handleFavoriteList}
                        addItem={addItem}
                      />
                    );
                  })
              : "no products here"}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
Products.propTypes = {
  products: PropTypes.array,
  english: PropTypes.bool,
  handleFavoriteList: PropTypes.func,
  addItem: PropTypes.func,
};

Products.defaultProps = {
  products: [],
};
