import { Button as MUIButton, ButtonProps } from "@mui/material";

interface IButtonProps extends ButtonProps {
  children: React.ReactNode | React.ReactNode[];
}

function Button(props: IButtonProps): JSX.Element {
  const { children, ...restButtonProps } = props;

  return <MUIButton {...restButtonProps}>{children}</MUIButton>;
}

export default Button;
