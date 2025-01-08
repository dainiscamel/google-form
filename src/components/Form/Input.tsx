import { Theme } from "@emotion/react";
import { styled, SxProps } from "@mui/material/styles";
import { ChangeEventHandler } from "react";
import Input from "@mui/material/Input";

interface InputProps {
  id?: string;
  disabled?: boolean;
  error?: boolean;
  value?: unknown;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  defaultValue?: string;
  sx?: SxProps<Theme> | undefined;
}
const FormInput = styled(Input)({
  "& .MuiInputBase-root": {
    padding: "8px 0",
    fontSize: "16px",
  },
  "& .MuiInput-underline": {
    "&:before": {
      borderBottom: "1px solid rgb(218, 220, 224)",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid rgb(218, 220, 224)",
    },
    "&:after": {
      borderBottom: "2px solid #673ab7",
    },
  },
  "& .MuiInputBase-input": {
    "&::before": {
      borderBottom: "1px solid rgb(218, 220, 224)",
    },
  },
  "&.Mui-focused": {
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #673ab7",
    },
  },
});

const FInput = ({
  id,
  disabled,
  error,
  value,
  placeholder,
  onChange,
  defaultValue,

  sx,
}: InputProps) => {
  return (
    <FormInput
      id={id}
      disabled={disabled}
      error={error}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      sx={sx}
    />
  );
};

export default FInput;
