import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-image: url("./grama.png");
`;

export const FormGroup = styled.form`
  background: #fdc830; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #f37335,
    #fdc830
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f37335,
    #fdc830
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 50px;
  border-radius: 20px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.title.color};
  font-size: ${(props) => props.theme.title.size};
  gap: 10px;
  font-weight: bold;
`;

export const FormArea = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

export const Label = styled.label`
  font-family: ${(props) => props.theme.font.font};
  font-size: 25px;
  font-weight: 500;
`;

export const TextInput = styled.input`
  flex: 1 0;
  min-width: 100px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px 40px;
  color: #fff;
  outline-color: #000;
  &:focus {
    outline: none;
  }
`;

export const ErrorText = styled.p`
  font-family: ${(props) => props.theme.font.font};
  color: ${(props) => props.theme.error.color};
  font-size: ${(props) => props.theme.error.size};
  weight: ${(props) => props.theme.error.weight};
`;

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
