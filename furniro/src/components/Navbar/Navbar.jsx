import React from "react";
// import styles from "./Navbar.module.scss";
import PropTypes from "prop-types";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Switch,
  Stack,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  FormControlLabel,
  // Icon,
  // Link,
} from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../../assets/images/House_Logos-05.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
function MobileNav({ brand, english, open, setOpen, handleEnglish }) {
  const styles = {
    brand: {
      fontSize: "1.5rem",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "800",
      wordSpacing: "0px",
      color: "text.black",
    },
  };
  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          height: "100%",
          overflowX: "hidden",
        }}
      >
        <Box>
          <ListItem>
            <Box component={"img"} src={logo} />
            <Typography sx={styles.brand}>{brand}</Typography>
          </ListItem>
          <ListItem>
            <Button sx={styles.linkMenu} component={Link} to="#root">
              <Typography variant="link">
                {english ? "Home" : "Inicio"}
              </Typography>
            </Button>
          </ListItem>
          <ListItem>
            <Button sx={styles.linkMenu} component={Link} to="shop">
              <Typography variant="link">
                {english ? "Shop" : "Tienda"}
              </Typography>
            </Button>
          </ListItem>
          <ListItem>
            <Button sx={styles.linkMenu} component={Link} to="#about">
              <Typography variant="link">
                {english ? "About" : "Acerca de"}
              </Typography>
            </Button>
          </ListItem>

          <ListItem>
            <Button sx={styles.linkMenu} component={Link} to="#contact">
              <Typography variant="link">
                {english ? "Contact" : "Contacto"}
              </Typography>
            </Button>
          </ListItem>
        </Box>
        <Box sx={{ position: "absolute", bottom: "0" }}>
          <ListItem>
            <FormControlLabel
              control={
                <Switch
                  // defaultChecked={true}
                  checked={english}
                  onChange={() => handleEnglish(!english)}
                  size="small"
                  color="info"
                />
              }
              label="English"
            />
          </ListItem>
        </Box>
      </List>
    </Drawer>
  );
}
MobileNav.propTypes = {
  brand: PropTypes.string,
  english: PropTypes.bool,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  handleEnglish: PropTypes.func,
};
export default function Navbar({
  brand,
  favorites,
  english,
  handleEnglish,
  // setEnglish,
  cart,
}) {
  // const theme = useTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    Navbar: {
      // border: "1px dashed red",
      display: "flex",
      backgroundColor: "neutral.light",
      color: "primary.main",
      fontSize: "17px",
      textDecoration: "nono solid rgb(0,0,0)",
      wordSpacing: "0px",
      height: "80px",
      // alignItems: "center",
      position: "relative",
    },
    brand: {
      fontSize: "1.5rem",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "800",
      wordSpacing: "0px",
      color: "text.black",
    },
    Toolbar: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
    },
    tranlastion: {
      fontWeight: "500",
      fontFamily: "Mulish, sans-serif",
      fontSize: "0.65rem",
      color: "#767676",
      textAlign: "justify",
    },
    linkmenu: {
      px: 5,
    },
    icons: {
      color: "#212121",
    },
  };

  // const navigate = useNavigate();

  return (
    // <div className={styles.Navbar}>Navbar Works</div>
    <React.Fragment>
      <AppBar sx={styles.Navbar} position="sticky">
        <Toolbar sx={styles.Toolbar}>
          {isMobile ? (
            <>
              <MobileNav
                brand={brand}
                english={english}
                open={open}
                setOpen={setOpen}
                handleEnglish={handleEnglish}
              />
              <Box
                id="navBrand"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Box sx={{ mr: "auto", ml: "0" }}>
                  <Button component={Link} to="/">
                    <Box component={"img"} src={logo} />
                    <Typography sx={styles.brand}>{brand}</Typography>
                  </Button>
                </Box>
                <Box sx={{ ml: "auto", mr: "0" }}>
                  <IconButton onClick={() => setOpen(!open)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                id="navBrand"
                sx={{ justifySelf: "flex-start", alignContent: "center" }}
              >
                <Button component={Link} to="/">
                  <Box component={"img"} src={logo} />
                  <Typography sx={styles.brand}>{brand}</Typography>
                </Button>
              </Box>
              <Box id="navMenu" sx={{ justifySelf: "space-around" }}>
                <Stack
                  direction="row"
                  spacing={0}
                  alignItems="center"
                  sx={{ fontSize: "10px" }}
                >
                  <Button sx={styles.linkMenu} component={Link} to="/">
                    <Typography variant="link">
                      {english ? "Home" : "Inicio"}
                    </Typography>
                  </Button>
                  <Button sx={styles.linkMenu} component={Link} to="/shop">
                    <Typography variant="link">
                      {english ? "Shop" : "Tienda"}
                    </Typography>
                  </Button>
                  <Button sx={styles.linkMenu} component={Link} to="#about">
                    <Typography variant="link">
                      {english ? "About" : "Acerca de"}
                    </Typography>
                  </Button>

                  <Button sx={styles.linkMenu} component={Link} to="#contact">
                    <Typography variant="link">
                      {english ? "Contact" : "Contacto"}
                    </Typography>
                  </Button>
                </Stack>
              </Box>
              <Box id="navIcons">
                <Stack
                  direction="row"
                  spacing={0}
                  alignItems="center"
                  sx={{ fontSize: "10px", color: "#212121" }}
                >
                  <IconButton onClick={() => console.log(favorites)}>
                    <PersonIcon sx={styles.icons} />
                  </IconButton>
                  <IconButton>
                    <SearchIcon sx={styles.icons} />
                  </IconButton>
                  <IconButton>
                    {favorites.length === 0 ? (
                      <FavoriteBorderIcon sx={styles.icons} />
                    ) : (
                      <Badge badgeContent={favorites.length} color="error">
                        <FavoriteIcon sx={styles.icons} />
                      </Badge>
                    )}
                  </IconButton>
                  <IconButton>
                    {cart.length === 0 ? (
                      <ShoppingCartOutlinedIcon sx={styles.icons} />
                    ) : (
                      <Badge badgeContent={cart.length} color="info">
                        <ShoppingCartOutlinedIcon sx={styles.icons} />
                      </Badge>
                    )}
                  </IconButton>
                  <Typography sx={styles.tranlastion}>ES</Typography>
                  <Switch
                    // defaultChecked={true}
                    checked={english}
                    onChange={() => handleEnglish(!english)}
                    size="small"
                    label="Spanish"
                    color="info"
                  />
                  <Typography sx={styles.tranlastion}>EN</Typography>
                </Stack>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
Navbar.propTypes = {
  brand: PropTypes.string,
  english: PropTypes.bool,
  handleEnglish: PropTypes.func,
  // setEnglish: PropTypes.func,
  favorites: PropTypes.array,
  cart: PropTypes.array,
};

Navbar.defaultProps = {
  brand: "#.dev",
  favorites: [],
  cart: [],
};
