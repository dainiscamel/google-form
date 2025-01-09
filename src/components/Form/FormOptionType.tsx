import { Radio, Checkbox, Typography } from "@mui/material";

interface FormOptionTypeProps {
  type: string;
  index: number;
}

const FormOptionType = ({ type, index }: FormOptionTypeProps) => {
  console.log(type);
  switch (type) {
    case "객관식 질문":
      return <Radio disabled />;
    case "체크박스":
      return <Checkbox disabled />;
    case "드롭다운":
      return (
        <Typography sx={{ width: 24, color: "rgba(0,0,0,0.6)" }}>
          {index + 1}.
        </Typography>
      );
    default:
      return <Radio disabled />;
  }
};

export default FormOptionType;
