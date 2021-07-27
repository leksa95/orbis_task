import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      fontSize: "1rem",
      marginBottom: "14px",
      span: {
        fontSize: "1.2rem",
      },
    },
    extendIcon: {
      cursor: "pointer",
      margin: "0 auto",
      display: "flex",
    },
  })
);

export default useStyles;
