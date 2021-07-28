import Typography from "@material-ui/core/Typography";
import Chip, { ChipProps } from "@material-ui/core/Chip";

import useStyles from "./useStyles";

type ChipColor = Pick<ChipProps, "color">;

interface Props extends ChipColor {
  title: string;
  items: [];
}

const ChipsComponent = ({ title, items, color }: Props) => {
  const styles = useStyles();

  return items.length === 0 ? null : (
    <div>
      <Typography variant="h6" className={styles.subTitle}>
        {title}
      </Typography>
      <div>
        {items?.map((el: string) => (
          <Chip className={styles.tags} color={color} key={el} label={el} />
        ))}
      </div>
    </div>
  );
};

export default ChipsComponent;
