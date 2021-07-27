import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    map: {
      width: "100%",
      maxHeight: "164px",
    },
  })
);

export default useStyles;
