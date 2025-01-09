import {
  Select,
  MenuItem,
  ListItemIcon,
  SelectChangeEvent,
} from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

interface FormSelectProps {
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
  className?: string;
}

interface QuestionType {
  value: string;
  icon: React.ReactElement;
  label: string;
}

const questionTypes: QuestionType[] = [
  {
    value: "객관식 질문",
    icon: <RadioButtonCheckedIcon fontSize="small" />,
    label: "객관식 질문",
  },
  {
    value: "단답형",
    icon: <ShortTextIcon fontSize="small" />,
    label: "단답형",
  },
  {
    value: "장문형",
    icon: <SubjectIcon fontSize="small" />,
    label: "장문형",
  },
  {
    value: "체크박스",
    icon: <CheckBoxIcon fontSize="small" />,
    label: "체크박스",
  },
  {
    value: "드롭다운",
    icon: <ArrowDropDownCircleIcon fontSize="small" />,
    label: "드롭다운",
  },
];

const FormSelect = ({ value, onChange, className }: FormSelectProps) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      size="small"
      className={className}
    >
      {questionTypes.map((type) => (
        <MenuItem key={type.value} value={type.value}>
          <ListItemIcon>{type.icon}</ListItemIcon>
          {type.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default FormSelect;
