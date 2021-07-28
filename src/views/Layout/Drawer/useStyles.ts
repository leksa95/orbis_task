import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 72;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#B6B7C3",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      ...theme.mixins.toolbar,
      justifyContent: "center",
      marginTop: "15px",
    },
    avatar: {
      background: "#001458",
    },
  })
);

export default useStyles;
