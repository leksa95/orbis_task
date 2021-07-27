import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./useStyles";

import Search from "../../../components/shared/Search";

interface Props {
  open: boolean;
  onDrawerToggle: any;
  setSelectedTicker: any;
}

const AppBarComponent = ({
  open,
  onDrawerToggle,
  setSelectedTicker,
}: Props) => {
  const styles = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(styles.appBar, {
        [styles.appBarShift]: true,
      })}
    >
      <Toolbar>
        <SearchIcon className={styles.searchIcon} />
        <Search setSelectedTicker={setSelectedTicker} />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
