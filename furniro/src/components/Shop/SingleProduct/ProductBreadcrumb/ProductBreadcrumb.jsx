// import styles from "./ProductBreadcrumb.module.scss";
import PropTypes from "prop-types";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
export default function ProductBreadcrumb({ english, parentTitle, product }) {
  var productTitle = product.title;
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    ProductBreadcrumb: {
      // border: "1px dashed red",
      backgroundColor: "secondary.variant",
      py: 4,
    },
    Link: {
      fontFamily: "Poppins",
      color: "text.black",
      textDecorationColor: "none",
    },
    LinkActive: {
      fontFamily: "Poppins",
      color: "text.grey",
      textDecorationColor: "none",
      textDecoration: "none",
    },
  };
  return (
    <Box sx={styles.ProductBreadcrumb}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          textDecoration: "none",
        }}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Typography sx={styles.Link} component={Link} to="/">
          {english ? "Home" : "Inicio"}
        </Typography>
        {parentTitle ? (
          <Typography
            sx={styles.Link}
            component={Link}
            underline="hover"
            color="inherit"
            to={"/shop"}
          >
            {parentTitle}
          </Typography>
        ) : (
          ""
        )}
        <Typography
          sx={styles.LinkActive}
          component={Link}
          to={`/shop/product/${product.id}`}
        >
          {productTitle}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
ProductBreadcrumb.propTypes = {
  english: PropTypes.bool,
  parentTitle: PropTypes.string,
  productId: PropTypes.number,
  productTitle: PropTypes.string,
  product: PropTypes.object,
};
