import styled from "styled-components";
import * as C from "reactstrap";

export const ListArea = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
`;

export const List = styled.ul`
  background-color: #999f;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const ListItem = styled.li`
  padding: 10px;
  margin-right: 10px;
`;

export const Images = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Container = styled(C.Container)`
  border: solid 1px #000;
  height: 100%;
  padding: 20px;
`;

export const LeftSide = styled(C.Col)`
  flex: 1;
  display: flex;

  flex-direction: column;
  gap: 20px;

  flex-wrap: wrap;
`;
export const RightSide = styled(C.Col)`
  height: 100%;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;

  display: flex;
  height: 200px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled(C.Card)`
  min-width: 470px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  margin: 0;
`;

export const ErrorText = styled.p`
  font-family: ${(props) => props.theme.font.font};
  color: ${(props) => props.theme.error.color};
  font-size: ${(props) => props.theme.error.size};
  weight: ${(props) => props.theme.error.weight};
`;
