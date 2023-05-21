import styled from "styled-components";

interface ContainerProps {
  sidebar: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 280px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.6s;
  z-index: 1000;

  > svg {
    position: static;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
