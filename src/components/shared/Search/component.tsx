import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import useGlobalStyles from "../../../hooks/useGlobalStyles";

interface Props {
  onSetValue: (e: React.ChangeEvent<{}>) => void;
  getOptions: string[];
  onSelectTicker: (_: React.ChangeEvent<{}>, value: string) => void;
}

const SearchComponent = ({ onSetValue, getOptions, onSelectTicker }: Props) => {
  const styles = useGlobalStyles();

  return (
    <Autocomplete
      freeSolo
      id="searchInput"
      disableClearable
      onInputChange={onSetValue}
      options={getOptions}
      onChange={onSelectTicker}
      classes={{
        root: styles.fullWidth,
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search symbols or companies"
          margin="normal"
          variant="outlined"
          InputProps={{ ...params.InputProps, type: "search" }}
        />
      )}
    />
  );
};

export default SearchComponent;
