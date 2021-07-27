import React, { useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";

import useStyles from "./useStyles";
import useGlobalStyles from "../../hooks/useGlobalStyles";

import AppBar from "./AppBar";
import Drawer from "./Drawer";
import Details from "../Details";

const LayoutComponent = () => {
  const globalStyles = useGlobalStyles();
  const styles = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedTicker, setSelectedTicker] = useState("");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={globalStyles.dFlex}>
      <CssBaseline />
      <AppBar
        open={open}
        onDrawerToggle={handleDrawerToggle}
        setSelectedTicker={setSelectedTicker}
      />
      <Drawer open={open} onDrawerToggle={handleDrawerToggle} />
      <main className={clsx(styles.content)}>
        <div className={styles.drawerHeader} />
        <Details selectedTicker={selectedTicker} />
      </main>
    </div>
  );
};

export default LayoutComponent;
