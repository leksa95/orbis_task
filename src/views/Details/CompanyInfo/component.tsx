import Typography from "@material-ui/core/Typography";

interface Props {
  sector: string;
  industry: string;
  ceo: string;
  employees: number;
}

const CompanyInfoComponent = ({ sector, industry, ceo, employees }: Props) => (
  <>
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
  </>
);

export default CompanyInfoComponent;
