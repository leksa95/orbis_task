import { ReactElement } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import useGlobalStyles from "../../hooks/useGlobalStyles";

import Title from "./Title";
import DailyPrice from "./DailyPrice";
import Chart from "./Chart";
import CompanyInfo from "./CompanyInfo";
import Address from "./Address";
import Map from "./Map";
import Description from "./Description";
import Chips from "./Chips";

interface Props {
  name: string;
  symbol: string;
  sector: string;
  industry: string;
  ceo: string;
  employees: number;
  hq_address: string;
  country: string;
  phone: string;
  description: string;
  similar: [];
  tags: [];
}

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
}: Props): ReactElement => {
  const globalStyles = useGlobalStyles();

  return (
    <Container maxWidth="md" className={globalStyles.resetSpacing}>
      <Title symbol={symbol} name={name} />
      <DailyPrice symbol={symbol} />
      <Chart symbol={symbol} />
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <CompanyInfo
            sector={sector}
            industry={industry}
            ceo={ceo}
            employees={employees}
          />
        </Grid>
        <Grid item xs={3}>
          <Address hq_address={hq_address} country={country} phone={phone} />
        </Grid>
        <Grid item xs={6}>
          <Map />
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Description description={description} />
        </Grid>
        <Grid item xs={6}>
          <Chips title="Related Stocks" items={similar} color="primary" />
          <Chips title="Tags" items={tags} color="secondary" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailsComponent;
