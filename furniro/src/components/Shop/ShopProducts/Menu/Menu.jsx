import React from "react";
// import styles from "./Menu.module.scss";
import PropTypes from "prop-types";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
export default function Menu({
  english,
  listView,
  productList,
  setListView,
  handleFilter,
  numberShow,
  setNumberShow,
  orderTypes,
  sortBy,
  handleOrderChange,
}) {
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    Menu: {
      // border: "1px dashed red",
      height: "50px",
      backgroundColor: "#F9F1E7",
      color: "text.black",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      boxShadow: "none",
    },
  };
  return (
    // <div className={styles.Menu}>Menu Works</div>
    <React.Fragment>
      <Box component="section" sx={styles.Menu}>
        <AppBar position="relative" sx={styles.Menu}>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            {/* {english ? title : "Menu"} */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{ height: "48px", width: "48px" }}
                onClick={() => handleFilter()}
              >
                <TuneOutlinedIcon />
              </IconButton>
              <Typography>{english ? "Filter" : "Filtrar"}</Typography>

              <IconButton
                title="GridView"
                sx={{ height: "48px", width: "48px" }}
                onClick={() => setListView(false)}
              >
                {listView ? <GridViewOutlinedIcon /> : <ViewModuleIcon />}
              </IconButton>
              <IconButton
                title="listView"
                sx={{ height: "48px", width: "48px" }}
                onClick={() => setListView(true)}
              >
                {listView ? <ViewListIcon /> : <ViewListOutlinedIcon />}
              </IconButton>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  height: "27px",
                  justifySelf: "center",
                  alignSelf: "center",
                  mx: 2,
                }}
              />
              <Typography>
                {english
                  ? "Showing " +
                    numberShow +
                    " of " +
                    String(productList.length) +
                    " elements"
                  : "Mostrando " +
                    numberShow +
                    " de " +
                    String(productList.length) +
                    " elementos"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mx: 1,
                }}
              >
                <Typography>{english ? "Show" : "Mostrar"}</Typography>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  defaultValue="16"
                  onChange={(e) => setNumberShow(e.target.value)}
                  variant="filled"
                  size="small"
                  sx={{ width: "50px", ml: 1 }}
                />
              </Box>

              <FormControl size="small" sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="order-simple-select-label">
                  {english ? "Sort by" : "Ordenar por"}
                </InputLabel>
                <Select
                  labelId="order-simple-select-label"
                  id="order-simple-select"
                  value={sortBy}
                  label={english ? "Sort by" : "Ordenar por"}
                  onChange={(e) => handleOrderChange(e.target.value)}
                >
                  {orderTypes.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
Menu.propTypes = {
  english: PropTypes.bool,
  favoriteList: PropTypes.array,
  productList: PropTypes.array,
  listView: PropTypes.bool,

  setListView: PropTypes.func,
  handleFilter: PropTypes.func,
  numberShow: PropTypes.number,
  setNumberShow: PropTypes.func,

  sortBy: PropTypes.number,
  orderTypes: PropTypes.array,
  handleOrderChange: PropTypes.func,
};

Menu.defaultProps = {
  productList: [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
  ],
};
