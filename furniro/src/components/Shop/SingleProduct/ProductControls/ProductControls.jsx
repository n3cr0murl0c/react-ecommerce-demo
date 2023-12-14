import React from "react";
// import styles from "./ProductControls.module.scss";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Divider,
  Button,
  IconButton,
  Rating,
  Stack,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { useLocation } from "react-router-dom";
import { DOMAIN } from "../../../../config/constants";
export default function ProductControls({
  english,
  product,
  // setProductList,
  // productList,
  handleAddtoCart,
  handleAddToWishList,
  cartList,
  favoriteList,
}) {
  const { pathname } = useLocation();

  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    ProductControls: {
      // border: "1px dashed red",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
      mx: 7,
      my: 3,
    },
    Product: {
      Title: {
        fontWeight: 700,
        fontFamily: "Poppins",
        pl: 3,
        fontSize: "2.5rem",
      },
      Price: {
        fontWeight: 500,
        fontFamily: "Poppins",
        color: "text.grey",
        fontSize: "0.8rem",
        pl: 3,
      },
      Description: {
        textAlign: "justify",
        fontWeight: 500,
        fontFamily: "Poppins",
        color: "text.black",
        fontSize: "0.8rem",
        padding: 3,
      },
      Variant: {
        // textAlign: "justify",
        fontWeight: 500,
        fontFamily: "Poppins",
        color: "text.grey",
        fontSize: "0.8rem",
        py: 1,
        pl: 3,
      },
      Tags: {
        fontWeight: 300,
        fontFamily: "Poppins",
        color: "text.grey",
        fontSize: "0.8rem",
      },
      TagsName: {
        fontWeight: 300,
        fontFamily: "Poppins",
        color: "text.grey",
        fontSize: "0.8rem",
        pl: 3,
        width: "100px",
      },
    },
    Images: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      p: 1,
      // border: "1px dashed orange",
      width: "100%",
      maxHeight: "580px",

      Thumbnail: {
        borderRadius: "50%",
        "& hover": {
          cursor: "pointer",
        },
      },

      Main: {
        width: "80%",
        m: "auto",
        p: "auto",
        // border: "1px solid blue",
        objectFit: "contain",
        objectPosition: "center",
        maxHeight: "550px",
      },
    },
  };
  var [qty, setQty] = React.useState(2);
  var [imgIndex, setImgIndex] = React.useState(0);

  // console.log("en product controls:", product);
  const handleQtyChange = (e, op) => {
    // let newProductList=productList

    // setProductList((prev)=>({...prev, }))
    // console.log(qty);
    if (op === 1) {
      console.log("operation plus");
      if (qty < product.stock) {
        setQty((prev) => prev + 1);
        console.log("Value change on qty to ", qty);
      }
    } else {
      console.log("operation minus");
      if (qty > 0) {
        setQty((prev) => prev - 1);
        console.log("Value change on qty to ", qty);
      }
    }
  };
  const handleImage = (e, index) => {
    console.log(e.target.id, index);
    setImgIndex(index);
  };
  const handleThumbnailClick = (e, index) => {
    console.log(e.target.id, index);
  };
  return (
    // <div className={styles.ProductControls}>ProductControls Works</div>
    <React.Fragment>
      <Box component="section" sx={styles.ProductControls}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            width: "100%",
          }}
        >
          {/* INICIO IMAGES */}
          <Box id="productImages" sx={styles.Images}>
            <Stack
              direction={"column"}
              spacing={1}
              sx={{ width: "5rem", pr: 1 }}
            >
              {product.images.map((image, index) => (
                <Box
                  component={"img"}
                  sx={styles.Images.Thumbnail}
                  id={"img-" + index}
                  key={index}
                  src={image}
                  onMouseEnter={(e) => handleImage(e, index)}
                  onMouseLeave={(e) => handleImage(e, index)}
                  onClick={(e) => handleThumbnailClick(e, index)}
                />
              ))}
            </Stack>

            <Box
              component={"img"}
              id={"mainImage"}
              src={product.images[imgIndex]}
              sx={styles.Images.Main}
            />
          </Box>
          {/* FIN IMAGES */}
          <Box
            id="productDescription"
            sx={{
              display: "flex",
              flexDirection: "column",
              px: 1,
              // border: "1px dashed green",
              width: "50%",
            }}
          >
            <Typography sx={styles.Product.Title}>{product.title}</Typography>
            <Typography sx={styles.Product.Price}>
              {"$ " + product.price}
            </Typography>
            {/* <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)}}
            /> */}
            {/* INICIO RATING */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                pl: 3,
                pt: 1,
              }}
            >
              <Rating name="no-value" value={null} />
              <Divider orientation="vertical" />
              <Typography sx={styles.Product.Price}>
                {english ? "Customers Reviews" : "Reseñas de Clientes"}
              </Typography>
            </Box>
            {/* FIN RATING */}
            {/* TEXTO DEL PRODUCTO */}
            <Typography sx={styles.Product.Description}>
              {product.description}
            </Typography>
            {/* INICIO VARIANTES */}
            <Stack
              direction={"row"}
              spacing={2}
              alignContent={"center"}
              justifyItems={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              {product.variants.map((i) => (
                <Box key={product.variants.indexOf(i)} sx={{ p: 1 }}>
                  <Typography sx={styles.Product.Variant}>
                    {english ? i.name : i.esName}
                  </Typography>

                  {i.name === "Color" ? (
                    <Stack
                      direction={"row"}
                      spacing={1}
                      sx={styles.Product.Variant}
                    >
                      {i.el.map((item) => (
                        <IconButton
                          key={i.el.indexOf(item)}
                          sx={{
                            backgroundColor: item,
                            height: "34px",
                            width: "34px",
                            borderRadius: "50%",
                          }}
                          size="small"
                        ></IconButton>
                      ))}
                    </Stack>
                  ) : (
                    <Stack
                      direction={"row"}
                      spacing={1}
                      sx={styles.Product.Variant}
                    >
                      {i.el.map((item) => (
                        <Button
                          variant="outlined"
                          key={i.el.indexOf(item)}
                          size="small"
                        >
                          {item}
                        </Button>
                      ))}
                    </Stack>
                  )}
                </Box>
              ))}
            </Stack>
            {/* FIN VARIANTES */}
            {/* INICIO BOTONES */}
            <Stack direction={"row"} spacing={1}>
              <Box>
                <Box
                  component={"form"}
                  sx={{
                    width: "7.5rem",
                    m: 1,
                    // "input[type=number]": { position: "relative", padding: "5px" },
                    // "input[type=number]::-webkit-outer-spin-button": {
                    //   display: "none",
                    // },
                  }}
                >
                  <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                    <OutlinedInput
                      name="QuantityChange"
                      id="outlined-adornment-number-input"
                      // type="number"
                      value={qty}
                      // size="small"
                      startAdornment={
                        <InputAdornment position="start">
                          <IconButton
                            onClick={(e) => handleQtyChange(e, 1)}
                            edge="start"
                          >
                            <AddIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={(e) => handleQtyChange(e, 2)}
                            edge="end"
                          >
                            <RemoveIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                    ></OutlinedInput>
                  </FormControl>
                </Box>
              </Box>
              <Button
                variant="outlined"
                disabled={product.stock === 0 ? true : false}
                sx={{
                  height: "55px",
                  my: "auto",
                  alignSelf: "center",
                  color: "text.black",
                  borderColor: "primary.main",
                }}
              >
                {english ? "Add to Cart" : "Agregar al carrito"}
              </Button>
              <Button
                variant="outlined"
                disabled={product.stock === 0 ? true : false}
                sx={{
                  height: "55px",
                  my: "auto",
                  alignSelf: "center",
                  color: "text.black",
                  borderColor: "primary.accent",
                }}
              >
                {english ? "Wish List" : "Lista de Deseos"}
              </Button>
            </Stack>
            {/* FIN BOTONES */}
            <Divider />
            {/* INICIO Miscelaneos */}
            <Box sx={{ py: 3 }}>
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"flex-start"}
              >
                <Typography sx={styles.Product.TagsName}>SKU:</Typography>
                {/* <Typography sx={styles.Product.Tags}>:</Typography> */}
                <Typography sx={styles.Product.Tags}>{product.sku}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography sx={styles.Product.TagsName}>
                  {english ? "Category:" : "Categoría:"}
                </Typography>
                {/* <Typography sx={styles.Product.Tags}>:</Typography> */}
                <Typography sx={styles.Product.Tags}>
                  {product.category}
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography sx={styles.Product.TagsName}>
                  {english ? "Tags:" : "Etiquetas:"}
                </Typography>
                {/* <Typography sx={styles.Product.Tags}>:</Typography> */}
                <Typography sx={styles.Product.Tags}>
                  {product.tags.map((item) => {
                    return " " + item + ", ";
                  })}
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography sx={styles.Product.TagsName}>
                  {english ? "Share:" : "Compartir:"}
                </Typography>

                <FacebookShareButton
                  url={DOMAIN + pathname}
                  hashtag={english ? "#Furniro" : "#MueblesFurniro"}
                >
                  <FacebookIcon size={20} borderRadius={50} />
                </FacebookShareButton>
                <LinkedinShareButton url={DOMAIN + pathname}>
                  <LinkedinIcon size={20} borderRadius={50} />
                </LinkedinShareButton>
                <TwitterShareButton url={DOMAIN + pathname}>
                  <XIcon size={20} borderRadius={50} />
                </TwitterShareButton>
                <WhatsappShareButton url={DOMAIN + pathname}>
                  <WhatsappIcon size={20} borderRadius={50} />
                </WhatsappShareButton>
              </Stack>
            </Box>
            {/* FIN Miscelaneos */}
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
ProductControls.propTypes = {
  english: PropTypes.bool,
  product: PropTypes.object,
  setProductList: PropTypes.func,
  productList: PropTypes.array,

  handleAddtoCart: PropTypes.func,
  handleAddToWishList: PropTypes.func,
  cartList: PropTypes.array,
  favoriteList: PropTypes.array,
};

ProductControls.defaultProps = {};
