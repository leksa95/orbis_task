import { useState } from "react";
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

  const [selectedTicker, setSelectedTicker] = useState("");

  return (
    <div className={globalStyles.dFlex}>
      <CssBaseline />
      <AppBar setSelectedTicker={setSelectedTicker} />
      <Drawer />
      <main className={clsx(styles.content)}>
        <div className={styles.drawerHeader} />
        <Details 
          selectedTicker={selectedTicker}
          setSelectedTicker={setSelectedTicker}
         />
      </main>
    </div>
  );
};

export default LayoutComponent;
