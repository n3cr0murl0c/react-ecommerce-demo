import React from "react";
// import cssStyles from "./Collage.module.scss";
import PropTypes from "prop-types";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
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
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    Collage: {
      // border: "1px dashed red",
      width: "100%",
      height: "780px",
      overflow: "hidden",
      p: 3,
      m: 0,
      ImageList: { height: "90%", width: "100%", overflow: "hidden" },
    },
    imgCollage: {
      objectFit: "contain",
      objectPosition: "cover cover",
      height: "350px",
      width: "350px",
      borderRadius: "10px",
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
      <Box sx={styles.Collage}>
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
        <Box>
          <ImageList
            variant="woven"
            cols={3}
            gap={4}
            sx={styles.Collage.ImageList}
          >
            {itemData ? (
              itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={styles.imgCollage}
                  />
                </ImageListItem>
              ))
            ) : (
              <Typography>{"no image data"}</Typography>
            )}
          </ImageList>
        </Box>
      </Box>
    </React.Fragment>
  );
}
Collage.propTypes = {
  english: PropTypes.bool,
};

Collage.defaultProps = {};
