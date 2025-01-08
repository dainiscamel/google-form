import styled from "styled-components";
import FInput from "./Input";
import { useState } from "react";

const FormHeader = () => {
  const [value, setValue] = useState("제목 없는 설문지");
  const [description, setDescription] = useState("");

  const onChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <Container>
      <ColorChip />
      <FInput
        value={value}
        onChange={onChangeLabel}
        sx={{
          width: "100%",
          height: "64px",
          fontSize: "32px",
          margin: "8px 0 0",
          padding: "0 0 8px",
        }}
      />
      <FInput
        value={description}
        placeholder={"설문지 설명"}
        onChange={onChangeDescription}
        sx={{ width: "100%" }}
      />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid rgb(218, 220, 224);
  border-radius: 8px;
  padding: 22px 24px 24px;
  background-color: white;
`;

const ColorChip = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  left: -1px;
  position: absolute;
  top: -1px;
  width: calc(100% + 2px);
  background-color: ${(props) => props.theme.color.main};
`;

export default FormHeader;
