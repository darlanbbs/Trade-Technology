import { useEffect, useState } from "react";
import * as C from "./styles";
import { useForm } from "./../../Components/UseContext";
import ModalInfo from "./ModalInfo";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const { setUseContext, useContext } = useForm();
  const [keyValue, setKeyValue] = useState("");
  const [error, setError] = useState(false);

  const isValidKey = (key: string) => {
    const keyPattern = /^[0-9a-zA-Z]{50}$/;
    return keyPattern.test(key);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUseContext((prevState: any) => ({
      ...prevState,
      key: keyValue,
    }));
    setKeyValue("");
    if (!isValidKey(useContext.key)) {
      setError(!error);
    }
  };

  useEffect(() => {
    if (isValidKey(useContext.key)) {
      navigate("/home");
    }
  }, [useContext.key]);

  return (
    <>
      <C.Container>
        <C.FormGroup>
          <C.Title>
            FOOTBALL-API <ModalInfo />
          </C.Title>
          <C.FormArea>
            <C.Label>Insira sua API_KEY</C.Label>
            <C.TextInput
              value={keyValue}
              onChange={(e) => setKeyValue(e.target.value)}
            />
          </C.FormArea>
          <C.Button onClick={handleSubmit}>Enviar</C.Button>
          {error && <C.ErrorText>Chamada de API Inválida</C.ErrorText>}
        </C.FormGroup>
      </C.Container>
    </>
  );
};

export default LoginPage;
