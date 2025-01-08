// components/FormQuestion.tsx
import {
  IconButton,
  Radio,
  Switch,
  Select,
  MenuItem,
  ListItemIcon,
  TextField,
  Checkbox,
} from "@mui/material";
import styled from "styled-components";
import FInput from "./Input";
import { useState } from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const FormQuestion = () => {
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("객관식 질문");
  const [options, setOptions] = useState([
    "옵션 1",
    "옵션 추가 또는 '기타' 추가",
  ]);

  const handleTypeChange = (event) => {
    setQuestionType(event.target.value);
  };

  const renderOptionsByType = () => {
    switch (questionType) {
      case "객관식 질문":
        return (
          <OptionsContainer>
            {options.map((option, index) => (
              <OptionRow key={index}>
                <Radio disabled />
                <FInput
                  value={option}
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
        );

      case "체크박스":
        return (
          <OptionsContainer>
            {options.map((option, index) => (
              <OptionRow key={index}>
                <Checkbox disabled />
                <FInput
                  value={option}
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
        );

      case "단답형":
        return (
          <ShortAnswerContainer>
            <TextField
              disabled
              fullWidth
              variant="standard"
              placeholder="단답형 텍스트"
            />
          </ShortAnswerContainer>
        );

      case "장문형":
        return (
          <LongAnswerContainer>
            <TextField
              disabled
              fullWidth
              multiline
              rows={4}
              variant="standard"
              placeholder="장문형 텍스트"
            />
          </LongAnswerContainer>
        );

      case "드롭다운":
        return (
          <OptionsContainer>
            {options.map((option, index) => (
              <OptionRow key={index}>
                <OptionNumber>{index + 1}.</OptionNumber>
                <FInput
                  value={option}
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
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <ColorBar />
      <QuestionHeader>
        <QuestionInput
          value={question}
          placeholder="질문"
          sx={{ width: "100%" }}
        />
        {/* fixme: 아이콘을 포함한 컴포안트 컴포넌트로 분리 고려. */}
        <RightSection>
          <StyledSelect
            value={questionType}
            size="small"
            onChange={handleTypeChange}
          >
            <MenuItem value="객관식 질문">
              <ListItemIcon>
                <RadioButtonCheckedIcon fontSize="small" />
              </ListItemIcon>
              객관식 질문
            </MenuItem>
            <MenuItem value="단답형">
              <ListItemIcon>
                <ShortTextIcon fontSize="small" />
              </ListItemIcon>
              단답형
            </MenuItem>
            <MenuItem value="장문형">
              <ListItemIcon>
                <SubjectIcon fontSize="small" />
              </ListItemIcon>
              장문형
            </MenuItem>
            <MenuItem value="체크박스">
              <ListItemIcon>
                <CheckBoxIcon fontSize="small" />
              </ListItemIcon>
              체크박스
            </MenuItem>
            <MenuItem value="드롭다운">
              <ListItemIcon>
                <ArrowDropDownCircleIcon fontSize="small" />
              </ListItemIcon>
              드롭다운
            </MenuItem>
          </StyledSelect>
        </RightSection>
      </QuestionHeader>
      {renderOptionsByType()}
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
          <Switch size="small" />
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
  gap: 12px;
  margin-bottom: 16px;
`;

const QuestionInput = styled(FInput)``;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledSelect = styled(Select)({
  minWidth: 200,
  height: 40,
  backgroundColor: "white",
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  "& .MuiListItemIcon-root": {
    minWidth: "auto",
  },
});

const OptionsContainer = styled.div`
  margin: 16px 0;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 8px;
`;

const ShortAnswerContainer = styled.div`
  margin: 16px 0;
  padding: 8px 0;
  border-bottom: 1px dotted rgb(218, 220, 224);
`;

const LongAnswerContainer = styled.div`
  margin: 16px 0;
  padding: 8px 0;
  border-bottom: 1px dotted rgb(218, 220, 224);
`;

const OptionNumber = styled.span`
  color: rgba(0, 0, 0, 0.54);
  margin-right: 8px;
`;

const BottomToolbar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgb(218, 220, 224);
`;

const ToolbarLeft = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid rgb(218, 220, 224);
`;

const ToolbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RequiredText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-left: 8px;
`;

export default FormQuestion;
