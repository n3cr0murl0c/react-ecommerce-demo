import React from "react";
// import styles from "./Products.module.scss";
import PropTypes from "prop-types";
import {
  Box,
  Typography,

  // useMediaQuery,
  useTheme,
} from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { GiTrophyCup } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function ProductsShop({
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
      flexShrink: "1",
      gap: 1,
      p: 2,
      my: 1,
      border: "3px solid whitesmoke",
      height: "100%",
      overflowX: "hidden",
      [theme.breakpoints.down("sm")]: {
        overflow: "auto",
        maxHeight: "100%",
        height: "100%",
        touchAction: "pan-y",
      },
    },
    shopAttributes: {
      backgroundColor: "secondary.main",
      display: "flex ",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "space-around",
      p: 5,
      attr: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      icon: {
        height: "60px",
        width: "52px",
        m: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      header: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "1.5rem",
      },
      description: {
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: ".95rem",
        color: "text.grey",
      },
      txtColumn: {
        ml: 1,
      },
    },
  };
  //

  return (
    // <div className={styles.ProductsShop}>ProductsShop Works</div>
    <React.Fragment>
      <Box component="section" sx={styles.Products} id="ShopProductos">
        {/* <Box>
          <Typography variant="h1" sx={styles.shopAttributes.header}>
            {english ? "Our Products" : "Nuestros Productos"}
          </Typography>
        </Box> */}
        <Box sx={styles.productsWrapper}>
          <Box sx={styles.productList}>
            {products.length !== 0
              ? products.map((item) => {
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
      <Box sx={styles.shopAttributes}>
        <Box sx={styles.shopAttributes.attr}>
          <Box sx={styles.shopAttributes.icon}>
            <GiTrophyCup size={70} />
          </Box>
          <Box sx={styles.shopAttributes.txtColumn}>
            <Typography sx={styles.shopAttributes.header}>
              {english ? "Warranty Protection" : "Garantía"}
            </Typography>
            <Typography sx={styles.shopAttributes.description}>
              {english ? "Over 2 year" : "De hasta 2 años"}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.shopAttributes.attr}>
          <Box sx={styles.shopAttributes.icon}>
            <IoShieldCheckmarkOutline size={70} />
          </Box>
          <Box sx={styles.shopAttributes.txtColumn}>
            <Typography sx={styles.shopAttributes.header}>
              {english ? "Warranty Protection" : "Garantía"}
            </Typography>
            <Typography sx={styles.shopAttributes.description}>
              {english ? "Over 2 year" : "De hasta 2 años"}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.shopAttributes.attr}>
          <Box sx={styles.shopAttributes.icon}>
            <MdOutlineLocalShipping size={70} />
          </Box>
          <Box sx={styles.shopAttributes.txtColumn}>
            <Typography sx={styles.shopAttributes.header}>
              {english ? "Free Shipping" : "Envío Gratis"}
            </Typography>
            <Typography sx={styles.shopAttributes.description}>
              {english ? "Orders over 150$" : "En Ordenes superiores a 150$"}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.shopAttributes.attr}>
          <Box sx={styles.shopAttributes.icon}>
            <MdOutlineSupportAgent size={70} />
          </Box>
          <Box sx={styles.shopAttributes.txtColumn}>
            <Typography sx={styles.shopAttributes.header}>
              {english ? "24/7 Support" : "Soporte 24/7"}
            </Typography>
            <Typography sx={styles.shopAttributes.description}>
              {english ? "Dedicated Support" : "Soporte Dedicado"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
ProductsShop.propTypes = {
  products: PropTypes.array,
  english: PropTypes.bool,
  handleFavoriteList: PropTypes.func,
  addItem: PropTypes.func,
};

ProductsShop.defaultProps = {};
