import { Input } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import styled from "styled-components";
import { ChangeEventHandler } from "react";

interface InputProps {
  id?: string;
  disabled?: boolean;
  error?: boolean;
  value?: unknown;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  defaultValue?: string;
  onClick?: () => void;
  sx?: SxProps;
}

export const StyledInput = styled(Input)`
  && {
    .MuiInput-input {
      font-size: 14px;
    }

    &.MuiInput-underline:before {
      border-bottom: 1px solid transparent;
    }

    &.MuiInput-underline:hover:before {
      border-bottom: ${({ theme }) => `1px solid ${theme.color.textSub}`};
    }

    &.MuiInput-underline:after {
      border-bottom: ${({ theme }) => `2px solid ${theme.color.main}`};
    }
  }
`;

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
