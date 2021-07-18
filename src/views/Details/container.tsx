import { useTickersDetails } from "../../hooks/useTickersDetails";

import DetailsComponent from "./component";

export interface SelectedProps {
  selectedTicker: string;
}

// FIX-ME: any
const Details = ({ selectedTicker }: SelectedProps) => {
  const tickerData = useTickersDetails(selectedTicker);

  return <>{selectedTicker && <DetailsComponent {...tickerData} />}</>;
};

export default Details;
