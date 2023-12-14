import React from "react";
// import styles from "./Footer.module.scss";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Input,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function Footer({ english }) {
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    Footer: {
      // border: "1px dashed red",
      mt: 1,
      pt: 7,
    },
    Rights: {
      justifyItems: "center",
      alignContent: "center",
      display: "flex",
      flexDirection: "row",
      my: 2,
      TypoRights: {
        color: "text.grey",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "1rem",
      },
    },
    details: {
      Header: {
        color: "text.black",
        fontFamily: "Poppins",
        fontWeight: "700",
        fontSize: "1.5rem",
        py: 3,
      },
      dire: {
        color: "text.grey",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: ".91rem",
      },
    },
    greyTitle: {
      color: "text.grey",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: ".91rem",
    },
    links: {
      color: "text.black",
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "1rem",
      textDecoration: "none",
    },
  };
  return (
    // <div className={styles.Footer}>Footer Works</div>
    <React.Fragment>
      <Container component="section" sx={styles.Footer}>
        <Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            useFlexGap
            flexWrap="wrap"
            justifyContent={"space-evenly"}
          >
            <Box id="Details" sx={styles.details}>
              <Typography sx={styles.details.Header}>Furniro</Typography>
              <Typography sx={styles.details.dire}>
                400 University Drive Suite
              </Typography>
              <Typography sx={styles.details.dire}>
                200 Coral, Gables
              </Typography>
              <Typography sx={styles.details.dire}>FL 33134, USA</Typography>
            </Box>
            <Box sx={styles.colEl}>
              <Typography sx={styles.greyTitle}>Links</Typography>
              <List>
                <ListItem>
                  <Typography sx={styles.links} component={Link} to="/">
                    {english ? "Home" : "Inicio"}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component={Link} to="/shop" sx={styles.links}>
                    {english ? "Shop" : "Tienda"}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component={Link} to="#about" sx={styles.links}>
                    {english ? "About" : "Acerca de"}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component={Link} to="#contact" sx={styles.links}>
                    {english ? "Contact" : "Contacto"}
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box sx={styles.colEl}>
              <Typography sx={styles.greyTitle}>Help</Typography>
              <List>
                <ListItem>
                  <Typography component={Link} to="#contact" sx={styles.links}>
                    {english ? "Payment Options" : "Opciones de Pago"}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component={Link} to="#contact" sx={styles.links}>
                    {english ? "Returns" : "Devoluciones"}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component={Link} to="#contact" sx={styles.links}>
                    {english ? "Privacy Policies" : "Políticas de Privacidad"}
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box sx={styles.colEl}>
              <Typography sx={styles.greyTitle}>
                {english ? "Newsletter" : "Noticias"}
              </Typography>
              <Box component={"form"}>
                <FormControl>
                  <Input
                    placeholder={
                      english ? "Enter your eMail address" : "Ingresa tu correo"
                    }
                    inputProps={{ "aria-label": "description" }}
                  />
                </FormControl>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ ml: 2, color: "text.black" }}
                >
                  {english ? "subscribe" : "subscribirse"}
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Divider />
        <Box sx={styles.Rights}>
          <Typography sx={styles.Rights.TypoRights}>
            {english
              ? "2023 Furniro. All Rights Reserved"
              : "2023 Furniro. Todos los Derechos Reservados"}
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
Footer.propTypes = {
  english: PropTypes.bool,
};

Footer.defaultProps = {};
