import { MyButton } from "./Button.styled";

const Button = ({ onClick, children }) => {
  return <MyButton onClick={onClick}>{children}</MyButton>;
};

export default Button;
