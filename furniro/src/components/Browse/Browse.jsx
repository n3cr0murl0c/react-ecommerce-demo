import React from "react";
// import styles from "./Browse.module.scss";
import PropTypes from "prop-types";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

import living from "../../assets/images/living.png";
import bedroom from "../../assets/images/bedroom.png";
import dining from "../../assets/images/dining.png";

export default function Browse({ english }) {
  const theme = useTheme();
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    Browse: {
      my: 5,
    },
    headerWrapper: {
      // border: "1px dashed red",
      textAlign: "center",
      my: 4,
    },

    header: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "2rem",
      letterSpacing: 0,
    },
    description: {
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "1.06rem",
      letterSpacing: 0,
      lineHeight: "1.35rem",
      // color: "green",
    },
    ambients: {
      textAlign: "center",
      subtitle: {
        fontFamily: "Poppins",
        fontWeight: "700",
        fontSize: "1.08rem",
        letterSpacing: 0,
        lineHeight: "1.35rem",
        mt: 4,
      },
      [theme.breakpoints.down("lg")]: {
        image: {
          maxWidth: "100%",
          height: "auto",
        },
      },
    },
  };
  return (
    // <div className={styles.Browse}>Browse Works</div>
    <React.Fragment>
      <Container id="browse" component="section" sx={styles.Browse}>
        <Box sx={styles.headerWrapper}>
          <Typography sx={styles.header}>
            {english ? "Browse the Range" : "Explora nuestro catálogo"}
          </Typography>
          <Typography sx={styles.description}>
            {english
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </Typography>
        </Box>
        <Box>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              fontSize: "10px",

              [theme.breakpoints.down("lg")]: {
                justifyContent: "center",
                alignContent: "center",
                flexWrap: "wrap",
                // height: "100%",
                width: "100%",
                overflow: "hidden",
              },
            }}
          >
            <Box sx={styles.ambients} id="bedroom">
              <Box component={"img"} src={bedroom} sx={styles.ambients.image} />
              <Typography sx={styles.ambients.subtitle}>
                {english ? "Bedroom" : "Dormitorio"}
              </Typography>
            </Box>
            <Box sx={styles.ambients} id="living">
              <Box component={"img"} src={living} />
              <Typography sx={styles.ambients.subtitle}>
                {english ? "Living" : "Sala de Estar"}
              </Typography>
            </Box>
            <Box sx={styles.ambients} id="dining">
              <Box component={"img"} src={dining} />
              <Typography sx={styles.ambients.subtitle}>
                {english ? "Dining" : "Comedor"}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
Browse.propTypes = { english: PropTypes.bool };

Browse.defaultProps = {};
