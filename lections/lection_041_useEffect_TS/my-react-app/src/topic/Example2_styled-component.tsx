import styled from 'styled-components';
import {ReactNode, useCallback} from "react";

interface ContentProps {
    $visible: boolean;
}


const Overlay = styled.div<ContentProps>`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;

  background-color: rgb(232 232 232 / 97%);
  z-index: 20;
  transition: 0.3s all;

  visibility: ${(props) => props.$visible? 'visible' : 'hidden'};
`;


const ModalContent = styled.div<ContentProps>`
  width: 80%;
  max-height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  text-align: center;
  padding: 30px;
  border-radius: 3px;
  background-color: white;
  transition: 0.3s all;

  display: flex;
  justify-content: center;
  align-items: center;
  
  
  visibility: ${(props) => props.$visible? 'visible' : 'hidden'};

  .closeModal {
    width: 20px;
    height: 20px;
    font-size: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  background: none;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 100ms linear;
  border: solid 2px #10222b;

  &.green-solid {
    border: solid 2px #95ab63;
    color: #fff;
    background: #95ab63;

    &:hover {
      background: #bdd684;
      border: solid 2px #bdd684;
    }
  }

  &.black-simple {
    border: solid 2px #10222b;
    &:hover {
      background: #10222b;
      color: #fff;
    }
  }
`

interface ModalProps {
    children: ReactNode;
    visible: boolean;
    onClose: (visible: boolean) => void;
}


const Modal = ({ visible, children, onClose } : ModalProps) => {
    const onCloseHandler = useCallback(() => {
        onClose(false);
    }, []);

    return(
        <>
            <ModalContent $visible={visible}>
                <Button className="closeModal" onClick={onCloseHandler}>X</Button>
                {children}
            </ModalContent>
            <Overlay $visible={visible}/>
        </>
    )
}

export default Modal;