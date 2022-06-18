import styled from "styled-components";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function MainProject() {
  const [bookmark, setBookmark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (bookmark) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }
  };
  return (
    <Container>
      <TitleImg src="/images/logo-mastercraft.svg" alt="Campign Logo" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <SubTitle>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </SubTitle>
      <Controls>
        <CallToAction onClick={() => setIsOpen(true)}>
          Back this Project
        </CallToAction>
        <ProjectModal open={isOpen} onClose={() => setIsOpen(false)} />
        <Bookmark onClick={handleClick}>
          {bookmark ? (
            <>
              <img src="/images/icon-bookmark.svg" alt="" />
              <p>Bookmark</p>
            </>
          ) : (
            <>
              <img src="/images/icon-bookmarked.svg" alt="" />
              <p style={{ color: "#147B74" }}>Bookmarked</p>
            </>
          )}
        </Bookmark>
      </Controls>
    </Container>
  );
}

const Container = styled.div`
  min-width: 325px;
  width: 45%;
  background: rgb(298, 298, 298);
  border-radius: 10px;
  padding: 60px 40px;
  margin: -100px 0 30px;
  text-align: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  h1 {
    font-size: 30px;
  }

  @media screen and (max-width: 376px) {
    padding: 50px 25px;
  }
`;

const TitleImg = styled.img`
  position: absolute;
  top: 42%;
  right: 49%;

  @media screen and (max-width: 376px) {
    top: 155px;
    right: 42%;
  }
`;

const SubTitle = styled.p`
  letter-spacing: 0.4px;
  padding: 10px 0;
  color: #686868;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const CallToAction = styled.button`
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

const Bookmark = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 50px;

  p {
    margin: 0 20px;
    font-weight: 800;
    color: #707070;

    @media screen and (max-width: 376px) {
      display: none;
    }
  }

  img {
    fill: black;
  }
`;

export default MainProject;
