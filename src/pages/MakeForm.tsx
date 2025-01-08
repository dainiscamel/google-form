import FormBody from "@/components/Form/FormBody";
import FormHeader from "@/components/Form/FormHeader";
import FormToolbar from "@/components/Form/FormToolbar";
import styled from "styled-components";

const MakeForm = () => {
  return (
    <Container>
      <FormHeader />
      <FormBody />
      <FormToolbar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 770px;
  width: 100%;
  position: relative;
`;

export default MakeForm;
