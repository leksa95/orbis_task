import { useTickerDetails } from "../../hooks/useTickerDetails";

import Empty from "../../components/shared/Empty";
import Error from "../../components/shared/Error";

import DetailsComponent from "./component";

export interface Props {
  selectedTicker: string;
}

const Details = ({ selectedTicker }: Props) => {
  const tickerData = useTickerDetails(selectedTicker);

  if (!tickerData) {
    return <Empty />;
  }

  if (tickerData.error) {
    return <Error message="No Results Found" />;
  }

  return <DetailsComponent {...tickerData} />;
};

export default Details;
