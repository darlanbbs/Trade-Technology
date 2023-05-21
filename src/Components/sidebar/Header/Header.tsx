import { useState } from "react";
import { FaBars } from "react-icons/fa";
import * as C from "./styles";
import Bar from "../Bar/Bar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <C.Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Bar active={setSidebar} />}
    </C.Container>
  );
};

export default Header;
