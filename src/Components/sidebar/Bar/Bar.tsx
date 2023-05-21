import React from "react";
import { Container, Content } from "./styles";
import { FaTimes } from "react-icons/fa";
import Leagues from "../../../pages/HomePage/Leagues";

interface BarProps {
  active?: any;
}

const Bar: React.FC<BarProps> = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <div>
      <Container sidebar={active}>
        <FaTimes onClick={closeSidebar} />
        <Content>
          <Leagues />
        </Content>
      </Container>
    </div>
  );
};

export default Bar;
