import { useState } from "react";

import { useTickerSearch } from "../../../hooks/useTickerSearch";

import SearchComponent from "./component";

const Search = ({
  setSelectedTicker,
}: {
  setSelectedTicker: (ticker: string) => void;
}) => {
  const [value, setValue] = useState("");
  const tickers = useTickerSearch(value);

  const handleSetValue = (e: unknown) =>
    setValue((e as React.ChangeEvent<{ value: string }>).target.value);

  const handleSelectTicker = (_: React.ChangeEvent<{}>, value: string) => {
    const ticker = value.split(" ")[0];

    setSelectedTicker(ticker);
  };

  const getOptions = tickers
    ? tickers.map((option) => `${option.ticker} ${option.name}`)
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
