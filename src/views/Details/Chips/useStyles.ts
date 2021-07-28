import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      fontSize: "1rem",
      marginTop: "15px",
      marginBottom: "14px",
      span: {
        fontSize: "1.2rem",
      },
    },
    tags: {
      height: "30px",
      borderRadius: "4px",
      margin: "4px 4px 4px 0",
      color: "#ffffff",
      fontSize: "14px",
    },
  })
);

export default useStyles;
