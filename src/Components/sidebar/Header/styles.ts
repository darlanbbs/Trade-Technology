import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  display: flex;
  @media (min-width: 992px) {
    display: none;
  }

  > svg {
    position: static;
    color: black;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
