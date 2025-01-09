import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import FormInput from "@/components/Form/Input";
import FormOptionType from "@/components/Form/FormOptionType";
import CloseIcon from "@mui/icons-material/Close";
import {
  addOption,
  addOther,
  deleteOption,
  updateOptionText,
} from "@/store/formSlice";
import { Option } from "@/types";
import { RootState } from "@/store/store";

const FormOption = () => {
  const dispatch = useDispatch();
  const { questionType, options, hasOther } = useSelector(
    (state: RootState) => state.form
  );

  const handleOptionChange = (id: string, value: string) => {
    dispatch(updateOptionText({ id, text: value }));
  };

  const handleAddOptionOrOther = () => {
    if (!hasOther) {
      dispatch(addOther());
    } else {
      dispatch(addOption());
    }
  };

  return (
    <Container>
      {options.map((option: Option, index: number) => (
        <OptionRow key={option.id}>
          <FormOptionType type={questionType} index={index} />
          <FormInput
            value={option.text}
            onChange={(e) => handleOptionChange(option.id, e.target.value)}
            placeholder={option.isOther ? "기타..." : ""}
            disabled={option.isOther}
            sx={{ width: "100%" }}
          />
          <DeleteButton onClick={() => dispatch(deleteOption(option.id))}>
            <CloseIcon fontSize="small" />
          </DeleteButton>
        </OptionRow>
      ))}
      {(questionType === "객관식 질문" ||
        questionType === "체크박스" ||
        questionType === "드롭다운") && (
        <OptionRow>
          <FormOptionType type={questionType} index={options.length} />
          <AddOptionContainer>
            <AddOptionButton onClick={() => dispatch(addOption())}>
              옵션 추가
            </AddOptionButton>
            {!hasOther && (
              <>
                또는
                <AddOptionButton onClick={handleAddOptionOrOther} isOther>
                  '기타' 추가
                </AddOptionButton>
              </>
            )}
          </AddOptionContainer>
        </OptionRow>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 12px 0;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 4px;
`;

const AddOptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
