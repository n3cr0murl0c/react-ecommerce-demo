import React from "react";
// import styles from "./Footer.module.scss";
// import PropTypes from 'prop-types';
import { Box } from "@mui/material";
export default function Footer(props) {
  /** @type{import('@mui/material').SxProps}*/
  const styles = {
    Footer: {
      border: "1px dashed red",
    },
  };
  return (
    // <div className={styles.Footer}>Footer Works</div>
    <React.Fragment>
      <Box component="section" sx={styles.Footer}>
        Footer Works
      </Box>
    </React.Fragment>
  );
}
Footer.propTypes = {};

Footer.defaultProps = {};
