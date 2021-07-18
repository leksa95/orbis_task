import { useState } from "react";

import { useTickers } from "../../../hooks/useTickers";

import SearchComponent from "./component";

// FIX-ME: add Props type
// onSelectedTicker={() => ({})}
const Search = ({ setSelectedTicker }: { setSelectedTicker: (ticker: string) => void }) => {
  const [value, setValue] = useState("");
  const tickers = useTickers(value);

  // FIX-ME: add type
  const handleSetValue = (e: unknown) => setValue((e as React.ChangeEvent<{value: string}>).target.value);

  const handleSelectTicker = (_: React.ChangeEvent<{}>, value: string) => {
    const ticker = value.split(" ")[0];

    setSelectedTicker(ticker);
  };

  // FIX-ME: use `${option.ticker} || ${option.name}`
  const getOptions = tickers
    ? tickers.map((option) => `${option.ticker} || ${option.name}`)
    : [];

  return (
    <SearchComponent
      onSetValue={handleSetValue}
      getOptions={getOptions}
      onSelectTicker={handleSelectTicker}
    />
  );
};

export default Search;
