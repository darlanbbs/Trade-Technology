import styled from "styled-components";
import * as C from "reactstrap";

export const ContainerHeader = styled(C.Container)`
  background-color: #000;
  color: ${(props) => props.theme.title.color};
  font-family: ${(props) => props.theme.font.font};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

export const ContainerPage = styled(C.Container)`
  background-color: #999f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-bottom: 100px;
`;

export const BackArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StastiscArea = styled(C.Container)`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TableArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const ErrorText = styled.p`
  font-family: ${(props) => props.theme.font.font};
  color: ${(props) => props.theme.error.color};
  font-size: ${(props) => props.theme.error.size};
  weight: ${(props) => props.theme.error.weight};
`;
export const TitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.font.font};
  color: ${(props) => props.theme.title.color};
  font-size: ${(props) => props.theme.title.size};
`;

export const ListArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;
export const ListItens = styled.li`
  display: flex;
  list-style: none;
`;

export const TypeItem = styled.strong`
  color: #fff;
`;

export const Images = styled.img`
  width: 175px;
  height: 175px;
`;
