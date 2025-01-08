import styled from "styled-components";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const FormToolbar = () => {
  return (
    <Container>
      <ControlPointIcon />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 45%;
  right: -7%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(218, 220, 224);
  border-radius: 8px;
  padding: 8px;
`;

export default FormToolbar;
