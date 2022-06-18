import styled from "styled-components";
import ReactDom from "react-dom";
import { useState } from "react";
import ThanksModal from "./ThanksModal";

function ProjectModal({ open, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [isSelect, setIsSelect] = useState("");

  const handleChange = (e) => {
    setIsSelect(e.target.className);
  };

  if (!open) return null;

  if (isModalOpen)
    return (
      <ThanksModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    );

  return ReactDom.createPortal(
    <Modal>
      <Wrapper className="wrap">
        <ImgWrapper>
          <img
            src="/images/icon-close-modal.svg"
            alt="Close"
            onClick={onClose}
          />
        </ImgWrapper>
        <Heading>
          <h1>Back this project</h1>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </Heading>
        <PledgeBox show={isSelect === "first-radio"}>
          <PaddingBox>
            <Label>
              <input
                type="radio"
                name="radio"
                className="first-radio"
                onChangeCapture={handleChange}
              />
              <label htmlFor="first-radio">Pledge with no reward</label>
            </Label>
            <Middletext>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Middletext>
          </PaddingBox>
          {isSelect === "first-radio" && (
            <Subscription>
              <label htmlFor="email">Enter email</label>
              <Controls>
                <input type="email" name="email"></input>
                <button onClick={() => setIsModalOpen(true)}>Continue</button>
              </Controls>
            </Subscription>
          )}
        </PledgeBox>

        <PledgeBox show={isSelect === "second-radio"}>
          <PaddingBox>
            <Content>
              <Label>
                <input
                  onChangeCapture={handleChange}
                  type="radio"
                  name="radio"
                  className="second-radio"
                />
                <label htmlFor="second-radio">Bamboo Stand</label>
                <p>Pledge $25 or more</p>
              </Label>
              <p>
                <b>101</b> left
              </p>
            </Content>
            <Middletext>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </Middletext>
          </PaddingBox>
          {isSelect === "second-radio" && (
            <Subscription>
              <label htmlFor="amount">Enter your Pledge</label>
              <Controls>
                <input
                  type="number"
                  name="amount"
                  min="25"
                  placeholder="$ 25"
                ></input>
                <button onClick={() => setIsModalOpen(true)}>Continue</button>
              </Controls>
            </Subscription>
          )}
        </PledgeBox>

        <PledgeBox show={isSelect === "third-radio"}>
          <PaddingBox>
            <Content>
              <Label>
                <input
                  onChangeCapture={handleChange}
                  type="radio"
                  name="radio"
                  className="third-radio"
                />
                <label htmlFor="third-radio">Black Edition Stand</label>
                <p>Pledge $75 or more</p>
              </Label>
              <p>
                <b>64</b> left
              </p>
            </Content>
            <Middletext>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </Middletext>
          </PaddingBox>
          {isSelect === "third-radio" && (
            <Subscription>
              <label htmlFor="amount">Enter your Pledge</label>
              <Controls>
                <input
                  type="number"
                  name="amount"
                  min="75"
                  placeholder="$ 75"
                ></input>
                <button onClick={() => setIsModalOpen(true)}>Continue</button>
              </Controls>
            </Subscription>
          )}
        </PledgeBox>

        <PledgeBox className="out">
          <PaddingBox>
            <Content>
              <Label>
                <input
                  type="radio"
                  name="radio"
                  className="fourth-radio"
                  disabled
                />
                <label htmlFor="fourth-radio">Mahogany Special Edition</label>
                <p>Pledge $200 or more</p>
              </Label>
              <p>
                <b>0</b> left
              </p>
            </Content>
            <Middletext>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </Middletext>
          </PaddingBox>
        </PledgeBox>
      </Wrapper>
    </Modal>,
    document.getElementById("portal")
  );
}

const Modal = styled.div`
  position: fixed; // This value of position is changed to fixed but it gives problem
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  background: rgb(255, 252, 252);
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center; */
  padding: 30px 50px;
  /* position: relative;
  top: 20rem; */
  margin: 70px 0;
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 376px) {
    width: 90%;
    padding: 25px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    cursor: pointer;
  }
`;

const Heading = styled.div`
  margin-bottom: 20px;
  h1 {
    font-size: 25px;
    margin-top: 20px;

    @media screen and (max-width: 376px) {
      margin: 0;
    }
  }

  p {
    padding: 20px 0;
    letter-spacing: 0.6px;
    color: hsl(0, 0%, 48%);
  }
`;

const PledgeBox = styled.div`
  margin-bottom: 20px;
  border: 2px solid;
  border-color: ${(props) =>
    props.show ? "hsl(176, 72%, 28%)" : "hsl(0, 0%, 48%)"};
  border-radius: 10px;
`;

const PaddingBox = styled.div`
  padding: 20px;
`;

const Label = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  label {
    margin: 0 20px;
    font-weight: 800;

    @media screen and (max-width: 376px) {
      margin-left: 20px;
      font-size: 18px;
    }
  }
  p {
    color: hsl(176, 50%, 47%);

    @media screen and (max-width: 376px) {
      margin: 5px 33px;
    }
  }
`;

const Middletext = styled.p`
  padding: 10px 10px 25px 45px;
  line-height: 1.7;
  color: hsl(0, 0%, 48%);
  @media screen and (max-width: 376px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 376px) {
    justify-content: center;

    ${Label} + p b {
      font-size: 25px;
    }
  }
`;

const Subscription = styled.div`
  border-top: 1px solid gray;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  /* display: none; */

  @media screen and (max-width: 376px) {
    gap: 25px;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  button {
    border-radius: 50px;
    background: hsl(176, 72%, 28%);
    padding: 10px 25px;
    border: 1px solid transparent;
    cursor: pointer;
    color: white;
    font-weight: 800;

    &:hover {
      background: hsl(176, 50%, 47%);
    }
  }

  input[type="email"] {
    padding: 0 5px;
    outline: none;
    margin-right: 20px;
    border: none;
    border-bottom: 1px solid;
  }

  input[type="number"] {
    border-radius: 10px;
    width: 25%;
    padding: 5px 15px;
    border: 1px solid;
    outline: none;
    margin-right: 20px;
  }

  @media screen and (max-width: 376px) {
    justify-content: center;

    input[type="email"] {
      margin: 0;
      margin-bottom: 20px;
    }
  }
`;

export default ProjectModal;
