import { Theme } from "@emotion/react";
import { TextField, TextFieldVariants } from "@mui/material";
import { styled, SxProps } from "@mui/material/styles";
import { ChangeEventHandler } from "react";

interface InputProps {
  id?: string;
  label?: React.ReactNode;
  value?: unknown;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  defaultValue?: unknown;
  variant?: TextFieldVariants;
  sx?: SxProps<Theme> | undefined;
}

const FormInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "#673ab7",
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#673ab7",
  },
  "& .MuiFilledInput-root": {
    "&:after": {
      borderBottomColor: "#673ab7",
    },
  },
});

const FTextField = ({
  id,
  label,
  value,
  onChange,
  defaultValue,
  variant = "outlined",
  sx,
}: InputProps) => {
  return (
    <FormInput
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      variant={variant}
      sx={sx}
    />
  );
};

export default FTextField;
