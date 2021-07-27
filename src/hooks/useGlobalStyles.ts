import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useGlobalStyles = makeStyles((theme: Theme) =>
  createStyles({
    dFlex: {
      display: "flex",
    },
    fullWidth: {
      width: "100%",
    },
    hide: {
      display: "none",
    },
    purple: {
      backgroundColor: "#001458",
      margin: "16px",
    },
    resetSpacing: {
      margin: 0,
      padding: 0,
    },
  })
);

export default useGlobalStyles;
