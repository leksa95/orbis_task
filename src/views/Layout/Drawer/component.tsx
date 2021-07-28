import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";

import useStyles from "./useStyles";

const DrawerComponent = () => {
  const styles = useStyles();

  return (
    <Drawer
      className={styles.drawer}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      <div className={styles.drawerHeader}>
        <Avatar className={styles.avatar}>{""}</Avatar>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
