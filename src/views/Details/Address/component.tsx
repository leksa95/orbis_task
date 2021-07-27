import Typography from "@material-ui/core/Typography";

import useStyles from "./useStyles";

interface Props {
  hq_address: string;
  country: string;
  phone: string;
}

const AddressComponent = ({ hq_address, country, phone }: Props) => {
  const styles = useStyles();

  return (
    <>
      <Typography variant="body2">{hq_address}</Typography>
      <Typography variant="body2" className={styles.upperText}>
        {country}
      </Typography>
      <Typography variant="body2">{phone}</Typography>
    </>
  );
};

export default AddressComponent;
