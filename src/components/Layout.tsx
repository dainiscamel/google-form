import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 119px;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.sub};
`;

export default Layout;
