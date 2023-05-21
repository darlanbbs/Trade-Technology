import * as C from "./styles";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderDetails = () => {
  return (
    <C.ContainerHeader fluid>
      <C.BackArea>
        <Link to="/home">
          <FaBackward /> <strong>Voltar</strong>
        </Link>
      </C.BackArea>
    </C.ContainerHeader>
  );
};

export default HeaderDetails;
