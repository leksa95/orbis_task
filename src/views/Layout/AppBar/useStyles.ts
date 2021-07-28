import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 72;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: "#ffffff",
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    searchIcon: {
      fill: "#B6B7C3",
      width: "26px",
      height: "26px",
      margin: "10px 10px 0 0",
    },
  })
);

export default useStyles;
