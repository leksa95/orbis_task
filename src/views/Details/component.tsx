import { ReactElement } from "react";
import diagram from "../../assets/diagram.png";
import map from "../../assets/map.png";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";

// interface DetailsProps {
//   name: string;
//   symbol: string;
//   sector: string;
//   industry: string;
//   ceo: string;
//   employees: number;
//   hq_address: string;
//   country: string;
//   phone: string;
//   description: string;
//     similar: [];
//     tags: [];
// }

// FIX-ME: styles in separate file

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      fontSize: "1rem",
      marginBottom: "14px",
      span: {
        fontSize: "1.2rem",
      },
    },
    tags: {
      height: "30px",
      borderRadius: "4px",
      marginRight: "4px",
      color: "#ffffff",
      fontSize: "14px",
    },
  })
);

const DetailsComponent = ({
  name,
  symbol,
  sector,
  industry,
  ceo,
  employees,
  hq_address,
  country,
  phone,
  description,
  similar,
  tags,
}: any): ReactElement => {
  const classes = useStyles();

  return (
    // FIX-ME: try to use classes prop
    <Container maxWidth="md" style={{ marginLeft: 0, paddingLeft: 0 }}>
      <Typography variant="h6" className={classes.subTitle}>
        <Typography
          component="span"
          style={{ fontSize: "1.2rem", fontWeight: 500 }}
        >
          {symbol}
        </Typography>{" "}
        {name}
      </Typography>
      <img
        style={{ width: "100%", marginBottom: "36px" }}
        src={diagram}
        alt="diagram"
      />
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <Typography variant="body2">
            Sector: <strong>{sector}</strong>
          </Typography>
          <Typography variant="body2">
            Industry: <strong>{industry}</strong>
          </Typography>
          <Typography variant="body2">
            CEO: <strong>{ceo}</strong>
          </Typography>
          <Typography variant="body2">
            Employees: <strong>{employees}</strong>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body2">{hq_address}</Typography>
          <Typography variant="body2" style={{ textTransform: "uppercase" }}>
            {country}
          </Typography>
          <Typography variant="body2">{phone}</Typography>
        </Grid>
        <Grid item xs={6}>
          <img
            style={{ width: "100%", maxHeight: "164px" }}
            src={map}
            alt="map"
          />
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.subTitle}>
            Description
          </Typography>
          {/* FIX-ME: ShowMoreText */}
          <Typography variant={"body1"}>{description}</Typography>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Typography variant="h6" className={classes.subTitle}>
              Related Stocks
            </Typography>
            <div>
              {similar?.map((el: string) => (
                <Chip
                  className={classes.tags}
                  color="primary"
                  key={el}
                  label={el}
                />
              ))}
            </div>
          </div>
          <div>
            <Typography
              variant="h6"
              className={classes.subTitle}
              style={{ marginTop: "40px" }}
            >
              Tags
            </Typography>
            <div>
              {tags?.map((el: string) => (
                <Chip
                  className={classes.tags}
                  color="secondary"
                  key={el}
                  label={el}
                />
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailsComponent;
