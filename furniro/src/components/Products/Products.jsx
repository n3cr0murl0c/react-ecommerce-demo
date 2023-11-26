import React from "react";
// import styles from "./Products.module.scss";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  // CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
  // useMediaQuery,
  useTheme,
} from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export default function Products({ english, products, handleFavoriteList }) {
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
    header: {
      textAlign: "center",
      fontSize: "2.5rem",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "700",
      lineHeight: "3.5rem",
      // my: 3,
      color: "text.black",
    },
    card: {
      width: "285px",
      height: "446px",
      "&:hover": {
        // backgroundColor: "#3A3A3A",
      },
      [theme.breakpoints.down("sm")]: {
        width: "250px",
        height: "450px",
        transform: "translate(0,640px)",
        "&:first-child": {},
      },
    },
    previousPrice: {
      textDecoration: "line-through",
      fontFamily: "Poppins",
      fontSize: "0.9rem",
      fontWeight: "600",
      color: "#898989",
    },
    actionButtons: {
      fontSize: "13px",
      fontFamily: "Poppins",
      fontWeight: "600",
    },
    shareBorderBox: {
      borderRadius: "50% 50%",
      width: "48px",
      height: "48px",
      backgroundColor: "#FFFFFF",
      position: "absolute",
      top: "2.55%",
      right: "78%",
      zIndex: "9999",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      "&:hover": {
        transform: "scale(1.08)",
        // cursor: "pointer",
      },
    },
    discountBorderBox: {
      borderRadius: "50% 50%",
      width: "48px",
      height: "48px",
      backgroundColor: "#E97171",
      position: "absolute",
      bottom: "35%",
      left: "78%",
      zIndex: "9999",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      // "&:hover": {
      //   transform: "scale(1.08)",
      // },
    },
    newBorderBox: {
      borderRadius: "50% 50%",
      width: "48px",
      height: "48px",
      backgroundColor: "#2EC1AC",
      position: "absolute",
      bottom: "38%",
      left: "78%",
      zIndex: "9999",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      // "&:hover": {
      //   transform: "scale(1.08)",
      // },
    },
    favBorderBox: {
      borderRadius: "50% 50%",
      width: "48px",
      height: "48px",
      backgroundColor: "#FFFFFF",
      position: "absolute",
      top: "2.55%",
      left: "78%",
      zIndex: "9999",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      "&:hover": {
        transform: "scale(1.08)",
      },
    },
    title: {
      fontFamily: "Poppins",
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    description: {
      fontFamily: "Poppins",
      fontSize: "0.9rem",
      fontWeight: "500",
      color: "#898989",
    },
    price: {
      fontFamily: "Poppins",
      fontSize: "1.1rem",
      fontWeight: "600",
      // color: "#898989",
    },
    pseudoArea: {
      display: "block",
      position: "relative",
      zIndex: 1,
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
              ? products.map((item) => {
                  return (
                    <Card
                      sx={styles.card}
                      key={products.indexOf(item)}
                      // onMouseEnter={(e) => handleFlipCard(e)}
                      id={String(item.title) + "-" + String(item.id)}
                    >
                      <Box
                        // onClick={() =>
                        //   console.log(
                        //     " en products.jsx cardactionarea",
                        //     products
                        //   )
                        // }
                        sx={styles.pseudoArea}
                      >
                        <Box sx={styles.shareBorderBox}>
                          <IconButton>
                            <ShareOutlinedIcon
                              fontSize="small"
                              sx={styles.shareBorderBox.icon}
                            />
                          </IconButton>
                        </Box>
                        <Box sx={styles.favBorderBox}>
                          <IconButton onClick={() => handleFavoriteList(item)}>
                            <FavoriteBorderOutlinedIcon fontSize="small" />
                          </IconButton>
                        </Box>
                        {item.discount ? (
                          <Box name="discount" sx={styles.discountBorderBox}>
                            <Typography
                              sx={{
                                color: "white",
                                display: "flex",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                            >
                              {"%" + String(item.discountValue * 100)}
                            </Typography>
                          </Box>
                        ) : (
                          ""
                        )}
                        {item.new ? (
                          <Box name="new" sx={styles.newBorderBox}>
                            <Typography
                              sx={{
                                color: "white",
                                display: "flex",
                                textAlign: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                fontSize: "0.9rem",
                              }}
                            >
                              {english ? "New" : "Nuevo"}
                            </Typography>
                          </Box>
                        ) : (
                          ""
                        )}
                        <CardMedia
                          component={"img"}
                          height={"300px"}
                          image={item.image}
                          alt={item.title}
                          id={
                            String(item.title) + "-" + String(item.id) + "-img"
                          }
                        />

                        <CardContent sx={{ py: 1, px: 3 }}>
                          <Typography sx={styles.title}>
                            {item.title}
                          </Typography>
                          <Typography sx={styles.description}>
                            {item.description}
                          </Typography>
                          <Stack direction={"row"} spacing={5}>
                            <Typography sx={styles.price}>
                              {"$ " + String(item.price)}
                            </Typography>

                            <Typography sx={styles.previousPrice}>
                              {"$ " + String(item.previousPrice)}
                            </Typography>
                          </Stack>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: 1,
                            flexShrink: 1,
                            justifyContent: "center",
                            alignContent: "center",
                          }}
                        >
                          <Stack
                            direction={"row"}
                            spacing={0}
                            name="buttons"
                            sx={{ zIndex: "1200" }}
                          >
                            <IconButton>
                              <CompareArrowsOutlinedIcon fontSize="small" />
                              <Typography sx={styles.actionButtons}>
                                {english ? "Compare" : "Comparar"}
                              </Typography>
                            </IconButton>
                            <IconButton>
                              <ShoppingCartOutlinedIcon fontSize="small" />
                              <Typography sx={styles.actionButtons}>
                                {english ? "Buy Now" : "Comprar"}
                              </Typography>
                            </IconButton>
                          </Stack>
                        </CardActions>
                      </Box>
                    </Card>
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
};

Products.defaultProps = {
  products: [],
};
