import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerInfoContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 8,
    },
    headerInfoContainerMobile: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    priceIndicatorWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    priceTitle: {
      marginRight: 13,
      fontSize: 32,
      fontWeight: 'bold',
    },
    priceLow: {
      fontSize: 18,
      color: theme.palette.error.main,
    },
    pricePositive: {
      fontSize: 18,
      color: theme.palette.success.main,
    },
  })
);

export default useStyles;