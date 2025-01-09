import { useState } from "react";
import { Radio, SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import FormInput from "./Input";
import FormSelect from "@/components/Form/FormSelect";
import FormBottomToolbar from "./FormBottomToolbar";

interface Option {
  id: string;
  text: string;
}

const FormBody = () => {
  const [questionType, setQuestionType] = useState("객관식 질문");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<Option[]>([
    { id: "1", text: "옵션 1" },
    { id: "2", text: "옵션 추가 또는 '기타' 추가" },
  ]);
  const [required, setRequired] = useState(false);

  const handleRequiredChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequired(e.target.checked);
  };

  const handleTypeChange = (e: SelectChangeEvent<string>) => {
    setQuestionType(e.target.value);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (id: string, value: string) => {
    setOptions(
      options.map((opt) => (opt.id === id ? { ...opt, text: value } : opt))
    );
  };

  const handleAddOption = () => {
    const newOption = {
      id: Date.now().toString(),
      text: `옵션 ${options.length + 1}`,
    };
    setOptions([...options, newOption]);
  };

  return (
    <Container>
      <ColorBar />
      <QuestionHeader>
        <QuestionInput
          value={question}
          onChange={handleQuestionChange}
          placeholder="질문"
          sx={{
            width: "100%",
            "& .MuiInputBase-input": {
              padding: "8px 0",
            },
          }}
        />
        <RightSection>
          <Select value={questionType} onChange={handleTypeChange} />
        </RightSection>
      </QuestionHeader>

      <OptionsContainer>
        {options.map((option, index) => (
          <OptionRow key={option.id}>
            <Radio disabled />
            <FormInput
              value={option.text}
              onChange={(e) => handleOptionChange(option.id, e.target.value)}
              onClick={() => {
                if (index === options.length - 1) {
                  handleAddOption();
                }
              }}
              sx={{
                width: "100%",
                "& .MuiInputBase-input": {
                  padding: "8px 0",
                },
              }}
            />
          </OptionRow>
        ))}
      </OptionsContainer>

      <FormBottomToolbar
        required={required}
        onRequiredChange={handleRequiredChange}
      />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid rgb(218, 220, 224);
  border-radius: 8px;
  padding: 24px;
  background-color: white;
  position: relative;
  margin-bottom: 12px;
`;

const ColorBar = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  height: 10px;
  background-color: #673ab7;
  border-radius: 8px 8px 0 0;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Select = styled(FormSelect)`
  min-width: 200px;
  height: 40px;
  background-color: white;
  & .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
  }
  & .MuiListItemIcon-root {
    min-width: auto;
  }
`;

const OptionsContainer = styled.div`
  margin: 16px 0;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const QuestionInput = styled(FormInput)`
  flex: 1;
`;

export default FormBody;
