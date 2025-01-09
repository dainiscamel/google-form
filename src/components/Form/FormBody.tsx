import { useState } from "react";
import { Radio, IconButton, Switch, SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import FormInput from "./Input";
import FormSelect from "@/components/Form/FormSelect";

import ImageIcon from "@mui/icons-material/Image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ContentCutIcon from "@mui/icons-material/ContentCut";

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
          <ImageButton>
            <ImageIcon />
          </ImageButton>
          <Select value={questionType} onChange={handleTypeChange} />
        </RightSection>
      </QuestionHeader>

      <FormatToolbar>
        <IconButton size="small">
          <FormatBoldIcon />
        </IconButton>
        <IconButton size="small">
          <FormatItalicIcon />
        </IconButton>
        <IconButton size="small">
          <FormatUnderlinedIcon />
        </IconButton>
        <IconButton size="small">
          <InsertLinkIcon />
        </IconButton>
        <IconButton size="small">
          <ContentCutIcon />
        </IconButton>
      </FormatToolbar>

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

      <BottomToolbar>
        <ToolbarLeft>
          <IconButton>
            <ContentCopyIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        </ToolbarLeft>
        <ToolbarRight>
          <RequiredText>필수</RequiredText>
          <Switch
            size="small"
            checked={required}
            onChange={(e) => setRequired(e.target.checked)}
          />
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </ToolbarRight>
      </BottomToolbar>
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

const ImageButton = styled(IconButton)`
  color: rgba(0, 0, 0, 0.54);
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

const FormatToolbar = styled.div`
  display: flex;
  gap: 4px;
  padding: 8px 0;
  border-bottom: 1px solid rgb(218, 220, 224);
  margin: 16px 0;
`;

const OptionsContainer = styled.div`
  margin: 16px 0;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const BottomToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgb(218, 220, 224);
`;

const ToolbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ToolbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const RequiredText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-right: 8px;
`;

const QuestionInput = styled(FormInput)`
  flex: 1;
`;

export default FormBody;
