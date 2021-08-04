import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import useStyles from "./useStyles";

interface Props {
  description: string;
}

const DescriptionComponent = ({ description }: Props) => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h6" className={styles.subTitle}>
        Description
      </Typography>
      <Collapse in={open} collapsedSize={50}>
        <Typography variant={"body1"}>{description}</Typography>
      </Collapse>
      {open ? (
        <ExpandLessIcon className={styles.extendIcon} onClick={toggleOpen} />
      ) : (
        <ExpandMoreIcon className={styles.extendIcon} onClick={toggleOpen} />
      )}
    </>
  );
};

export default DescriptionComponent;
