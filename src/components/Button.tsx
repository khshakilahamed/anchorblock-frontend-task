type ButtonPropsType = {
  children: string | React.ReactElement;
};

const Button = ({ children }: ButtonPropsType) => {
  return <button>{children}</button>;
};

export default Button;
