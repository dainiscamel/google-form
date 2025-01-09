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
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const StyledInput = styled(Input)({
  width: "100%",
  "& .MuiInputBase-root": {
    padding: "8px 0",
    fontSize: "16px",
  },
  "& .MuiInput-underline": {
    "&:before": {
      borderBottom: "1px solid rgb(218, 220, 224)",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.87)",
    },
    "&:after": {
      borderBottom: "2px solid #673ab7",
    },
  },
  "& .MuiInputBase-input": {
    padding: "8px 0",
    "&::placeholder": {
      color: "rgba(0, 0, 0, 0.54)",
      opacity: 1,
    },
  },
  "&.Mui-focused": {
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #673ab7",
    },
  },
});

const FormInput = ({
  id,
  disabled,
  error,
  value,
  placeholder,
  onChange,
  defaultValue,
  onClick,
  sx,
}: InputProps) => {
  return (
    <StyledInput
      id={id}
      disabled={disabled}
      error={error}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      onClick={onClick}
      sx={sx}
    />
  );
};

export default FormInput;
