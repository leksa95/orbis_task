import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    upperText: {
      textTransform: "uppercase",
    },
  })
);

export default useStyles;
