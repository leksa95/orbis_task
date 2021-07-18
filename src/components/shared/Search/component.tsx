import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface Props {
  // FIX-ME: types
  onSetValue: (e: React.ChangeEvent<{}>) => void;
  getOptions: string[];
  onSelectTicker: (_: React.ChangeEvent<{}>, value: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '100%'
    },
  })
);

// FIX-ME: width: 100% in class 

const SearchComponent = ({ onSetValue, getOptions, onSelectTicker }: Props) => {
  const styles = useStyles();
  return (
    (
        <Autocomplete
          freeSolo
          id="searchInput"
          disableClearable
          onInputChange={onSetValue}
          options={getOptions}
          onChange={onSelectTicker}
          classes={{
            root: styles.root
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search symbols or companies"
              margin="normal"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
    )
  )
};

export default SearchComponent;
