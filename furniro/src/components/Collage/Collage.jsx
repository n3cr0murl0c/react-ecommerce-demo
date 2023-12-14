import React from "react";
import cssStyles from "./Collage.module.scss";
import PropTypes from "prop-types";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// import i36 from "../../assets/images/collage/36.png";
import i37 from "../../assets/images/collage/37.png";
import i38 from "../../assets/images/collage/38.png";
import i39 from "../../assets/images/collage/39.png";
import i40 from "../../assets/images/collage/40.png";
import i41 from "../../assets/images/collage/41.png";
import i43 from "../../assets/images/collage/43.png";
import i44 from "../../assets/images/collage/44.png";
import i45 from "../../assets/images/collage/45.png";
export default function Collage({ english }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    Collage: {
      // border: "1px dashed red",
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignContent: "center",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "545px",
      overflow: "hidden",
      p: 0,
      m: 0,

      mobile: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "flex-start",
        maxWidth: "630px",
        width: "450px",
      },
    },
    imgCollage: {
      objectFit: "contain",
      objectPosition: "cover cover",
      height: "450px",
      width: "350px",

      borderRadius: "10px",
      mobile: {
        width: "125px",
      },
    },
  };
  const itemData = [
    // { img: `${i36}` },
    { img: `${i37}` },
    { img: `${i38}` },
    { img: `${i39}` },
    { img: `${i40}` },
    { img: `${i41}` },
    { img: `${i43}` },
    { img: `${i44}` },
    { img: `${i45}` },
  ];
  return (
    // <div className={styles.Collage}>Collage Works</div>
    <React.Fragment>
      <Box sx={styles.Collage} component={"section"} id={"collage"}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            {english ? "Share your setup with" : "Comparte tu diseño con"}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "2.3rem",
            }}
          >
            {english ? "#FurniroFurniture" : "#MueblesFurniro"}
          </Typography>
        </Box>
        <Box sx={{ overflow: "hidden" }}>
          {isMobile ? (
            <ImageList
              variant="woven"
              cols={2}
              gap={2}
              sx={styles.Collage.mobile}
            >
              {itemData ? (
                itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=350&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      style={styles.imgCollage.mobile}
                    />
                  </ImageListItem>
                ))
              ) : (
                <Typography>{"no image data"}</Typography>
              )}
            </ImageList>
          ) : (
            <ImageList
              variant="woven"
              cols={4}
              gap={1}
              // sx={styles.Collage.ImageList}
              className={cssStyles.ImageList}
              id="imageListSM"
            >
              {itemData ? (
                itemData.map((item) => (
                  <ImageListItem key={item.img} className={cssStyles.uImge}>
                    <Box
                      component={"img"}
                      srcSet={item.img}
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      sx={styles.imgCollage}
                    />
                  </ImageListItem>
                ))
              ) : (
                <Typography>{"no image data"}</Typography>
              )}
            </ImageList>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}
Collage.propTypes = {
  english: PropTypes.bool,
};

Collage.defaultProps = {};
