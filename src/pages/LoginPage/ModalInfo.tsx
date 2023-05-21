import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalInfo(args: any) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <img
        src="./infoIcon.png"
        alt=""
        onClick={toggle}
        style={{ cursor: "pointer" }}
      />
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>API_KEY</ModalHeader>
        <ModalBody>
          <strong>Oque é uma API_KEY?</strong>
          <br></br>
          Uma API Key é um código exclusivo que permite que você acesse e
          utilize os recursos de uma API (Interface de Programação de
          Aplicativos). Ela atua como uma senha ou identificador de
          autenticação, controlando o acesso e autorizando suas solicitações à
          API. <br></br>
          <strong>Como conseguir uma?</strong>
          <br></br>
          Para obter uma API Key, é necessário registrar-se no site{" "}
          <a href="https://www.api-football.com/pricing" target="_blank">
            https://www.api-football.com/pricing.
          </a>{" "}
          Após o registro, você terá acesso à plataforma API-FOOTBALL, onde
          poderá explorar e utilizar diversas APIs disponíveis, obtendo as
          respectivas chaves de API para autenticação e acesso aos serviços
          oferecidos
        </ModalBody>
        <ModalFooter>
          <a href="https://www.api-football.com/pricing" target="_blank">
            <Button color="primary">Visitar</Button>{" "}
          </a>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalInfo;
