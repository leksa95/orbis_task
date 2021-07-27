interface Props {
  message: string;
}

const ErrorComponent = ({ message }: Props) => <div>{message}</div>;

export default ErrorComponent;
