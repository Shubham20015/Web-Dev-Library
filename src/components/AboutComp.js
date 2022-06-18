import styled from "styled-components";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function AboutComp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <AboutInfo>
        <h1>About this project</h1>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>

        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </AboutInfo>
      <PledgeBox>
        <Heading>
          <h1>Bamboo Stand</h1>
          <p>Pledge $25 or more</p>
        </Heading>
        <Description>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </Description>
        <DonateControls>
          <div>
            <Counter>
              101<p>left</p>
            </Counter>
          </div>
          <button onClick={() => setIsOpen(true)}>Select Reward</button>
        </DonateControls>
      </PledgeBox>
      <PledgeBox>
        <Heading>
          <h1>Black Edition Stand</h1>
          <p>Pledge $75 or more</p>
        </Heading>
        <Description>
          You get a Black Special Edition computer stand and a personal thank
          you. You’ll be added to our Backer member list. Shipping is included.
        </Description>
        <DonateControls>
          <div>
            <Counter>
              64<p>left</p>
            </Counter>
          </div>
          <button onClick={() => setIsOpen(true)}>Select Reward</button>
        </DonateControls>
      </PledgeBox>
      <PledgeBox className="out">
        <Heading>
          <h1>Mahogany Special Edition</h1>
          <p>Pledge $200 or more</p>
        </Heading>
        <Description>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You’ll be added to our Backer member list.
          Shipping is included.
        </Description>
        <DonateControls>
          <div>
            <Counter>
              0<p>left</p>
            </Counter>
          </div>
          <button disabled>Out of stock</button>
        </DonateControls>
      </PledgeBox>
      <ProjectModal open={isOpen} onClose={() => setIsOpen(false)} />
    </Container>
  );
}

const Container = styled.div`
  min-width: 325px;
  width: 45%;
  background: rgb(279, 279, 279);
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 768px) {
    padding: 30px;
    margin-bottom: 50px;
  }
`;

const AboutInfo = styled.div`
  margin-bottom: 35px;
  h1 {
    font-size: 25px;
  }

  h1 + p {
    padding: 30px 0;
  }
  p {
    line-height: 1.5;
    color: hsl(0, 0%, 48%);
  }
`;

const PledgeBox = styled.div`
  width: 100%;
  border: 1.5px solid hsl(0, 0%, 70%);
  margin-bottom: 20px;
  padding: 28px;
  border-radius: 10px;

  p {
    color: hsl(0, 0%, 48%);
  }

  @media screen and (max-width: 376px) {
    padding: 23px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    font-size: 20px;
  }
  p {
    color: hsl(176, 72%, 28%);
    font-weight: 800;

    @media screen and (max-width: 376px) {
      margin-top: 10px;
    }
  }
`;
const Description = styled.p`
  line-height: 1.5;
  letter-spacing: 0.5px;
  padding: 25px 0;
`;
const DonateControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

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

    @media screen and (max-width: 376px) {
      margin-top: 20px;
    }
  }
`;
const Counter = styled.span`
  font-size: 30px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  p {
    margin: 0 10px;
  }
`;

export default AboutComp;
