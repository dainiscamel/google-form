// components/Form/FormOption/index.tsx
import { Radio, IconButton } from "@mui/material";
import styled from "styled-components";
import FormInput from "@/components/Form/Input";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface Option {
  id: string;
  text: string;
  isOther?: boolean;
}

const FormOption = () => {
  const [options, setOptions] = useState<Option[]>([
    { id: "1", text: "옵션 1" },
  ]);
  const [hasOther, setHasOther] = useState(false);

  const handleOptionChange = (id: string, value: string) => {
    setOptions(
      options.map((opt) => (opt.id === id ? { ...opt, text: value } : opt))
    );
  };

  const handleAddOption = () => {
    const newOption = {
      id: Date.now().toString(),
      text: `옵션 ${options.filter((opt) => !opt.isOther).length + 1}`,
    };
    setOptions([
      ...options.filter((opt) => !opt.isOther),
      newOption,
      ...options.filter((opt) => opt.isOther),
    ]);
  };

  const handleAddOther = () => {
    if (!hasOther) {
      const newOption = {
        id: Date.now().toString(),
        text: "기타...",
        isOther: true,
      };
      setOptions([...options, newOption]);
      setHasOther(true);
    }
  };

  const handleDeleteOption = (id: string) => {
    const option = options.find((opt) => opt.id === id);
    if (option?.isOther) {
      setHasOther(false);
    }
    setOptions(options.filter((opt) => opt.id !== id));
  };

  return (
    <Container>
      {options.map((option) => (
        <OptionRow key={option.id}>
          <Radio disabled />
          <FormInput
            value={option.text}
            onChange={(e) => handleOptionChange(option.id, e.target.value)}
            placeholder={option.isOther ? "기타..." : ""}
            disabled={option.isOther ? true : false}
          />
          <DeleteButton onClick={() => handleDeleteOption(option.id)}>
            <CloseIcon fontSize="small" />
          </DeleteButton>
        </OptionRow>
      ))}
      <OptionRow>
        <Radio disabled />
        <AddOptionButton onClick={handleAddOption}>옵션 추가</AddOptionButton>
        {!hasOther && "또는"}
        {!hasOther && (
          <AddOptionButton onClick={handleAddOther}>
            '기타' 추가
          </AddOptionButton>
        )}
      </OptionRow>
    </Container>
  );
};

const Container = styled.div`
  margin: 16px 0;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 4px;
`;

const AddOptionButton = styled.button<{ isOther?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-size: 14px;
  color: ${(props) => (props.isOther ? "#1a73e8" : "rgba(0, 0, 0, 0.6)")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 4px;
  }
`;

const DeleteButton = styled(IconButton)`
  padding: 4px;
  visibility: hidden;

  ${OptionRow}:hover & {
    visibility: visible;
  }
`;

export default FormOption;
