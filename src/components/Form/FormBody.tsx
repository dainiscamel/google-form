import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import FormInput from "./Input";
import FormSelect from "@/components/Form/FormSelect";
import FormBottomToolbar from "./FormBottomToolbar";
import FormOption from "@/components/Form/FormOption";

const FormBody = () => {
  const [questionType, setQuestionType] = useState("객관식 질문");
  const [question, setQuestion] = useState("");
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

      <FormOption />

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

const QuestionInput = styled(FormInput)`
  flex: 1;
`;

export default FormBody;
