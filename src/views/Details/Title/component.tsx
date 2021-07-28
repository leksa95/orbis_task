import Typography from "@material-ui/core/Typography";

import useStyles from "./useStyles";

interface Props {
  symbol: string;
  name: string;
}

const TitleComponent = ({ symbol, name }: Props) => {
  const styles = useStyles();

  return (
    <Typography variant="h6" className={styles.subTitle}>
      <Typography component="span">{symbol} </Typography>
      {name}
    </Typography>
  );
};

export default TitleComponent;
