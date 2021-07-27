import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import useStyles from "./useStyles";
import { useTickerDailyPrice } from "../../../hooks/useTickerDailyPrice";

import Error from "../../../components/shared/Error";

interface Props {
  symbol: string;
}

const DailyPriceComponent = ({ symbol }: Props) => {
  const { lastAvailablePrice, priceDifference, changePercent } =
    useTickerDailyPrice(symbol);
  const styles = useStyles();

  const isPositiveNumber = Math.sign(priceDifference || -1) !== -1;

  return lastAvailablePrice && priceDifference && changePercent ? (
    <div
      className={`${styles.headerInfoContainer} ${styles.headerInfoContainerMobile}`}
    >
      <div className={styles.priceTitle}>${lastAvailablePrice}</div>
      <div className={styles.priceIndicatorWrapper}>
        <span
          className={isPositiveNumber ? styles.pricePositive : styles.priceLow}
        >
          {priceDifference}
        </span>
        {isPositiveNumber ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        <span
          className={isPositiveNumber ? styles.pricePositive : styles.priceLow}
        >
          {changePercent}%
        </span>
      </div>
    </div>
  ) : (
    <Error message="Something went wrong. Please try again later." />
  );
};

export default DailyPriceComponent;
