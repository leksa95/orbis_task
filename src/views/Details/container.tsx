import { useTickerDetails } from "../../hooks/useTickerDetails";

import Empty from "../../components/shared/Empty";
import Error from "../../components/shared/Error";

import DetailsComponent from "./component";

export interface Props {
  selectedTicker: string;
  setSelectedTicker: React.Dispatch<React.SetStateAction<string>>;
}

const Details = ({ selectedTicker, setSelectedTicker }: Props) => {
  const tickerData = useTickerDetails(selectedTicker);

  const handleSelectTicker = (ticker: string) => () => {
    setSelectedTicker(ticker);
  }

  if (!tickerData) {
    return <Empty />;
  }

  if (tickerData.error) {
    return <Error message="No Results Found" />;
  }

  return (
    <DetailsComponent 
      {...tickerData}
      onSelectTicker={handleSelectTicker}
    />
  )
};

export default Details;
