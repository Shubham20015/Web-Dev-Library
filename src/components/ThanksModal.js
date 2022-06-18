import ReactDom from "react-dom";
import styled from "styled-components";

// ReactModal.setAppElement("#root");

function ThanksModal({ open, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <Modal>
      <Wrapper>
        <img src="/images/icon-check.svg" alt="" />
        <Message>
          <h1>Thanks for your support!</h1>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
        </Message>
        <Button onClick={onClose}>Got it!</Button>
      </Wrapper>
    </Modal>,
    document.getElementById("portal")
  );
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  background: rgb(255, 252, 252);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  position: absolute;
  top: 10rem;
  width: 30%;
  border-radius: 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  button {
    border-radius: 50px;
    background: hsl(176, 72%, 28%);
    padding: 15px 30px;
    border: 1px solid transparent;
    cursor: pointer;
    color: white;
    font-weight: 800;

    &:hover {
      background: hsl(176, 50%, 47%);
    }
  }

  @media screen and (max-width: 376px) {
    width: 90%;
    padding: 35px 20px;
  }
`;

const Button = styled.button`
  border-radius: 50px;
  background: hsl(176, 72%, 28%);
  padding: 15px 30px;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  font-weight: 800;

  &:hover {
    background: hsl(176, 50%, 47%);
  }
`;

const Message = styled.div`
  text-align: center;
  padding: 30px 20px;

  h1 {
    font-size: 25px;
    padding: 5px 0 30px 0;
  }

  p {
    line-height: 1.5;
    color: hsl(0, 0%, 48%);
  }

  @media screen and (max-width: 376px) {
    padding: 35px 5px;
  }
`;

export default ThanksModal;
