import { useState } from "react";
import styled from "styled-components";

function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="CrowdFund" />
        </Logo>
        <NavIcons onClick={() => setOpen(!open)}>
          {open ? (
            <img src="/images/icon-hamburger.svg" alt="open" />
          ) : (
            <img src="/images/icon-close-menu.svg" alt="close" />
          )}
        </NavIcons>
        {/* Now problem is that when i open webpage in mobile,menu is already open */}
        <Header show={open}>
          <p>About</p>
          <p>Discover</p>
          <p>Get started</p>
        </Header>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  background: url("/images/image-hero-desktop.jpg");
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 60vh;
  /* position: relative;
  display: flex;
  justify-content: space-between; */

  @media screen and (max-width: 376px) {
    height: 35vh;
    background: url("/images/image-hero-mobile.jpg") no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const Logo = styled.div`
  color: white;
  margin-left: 150px;

  @media screen and (max-width: 376px) {
    margin-left: 20px;
  }
`;

const Nav = styled.div`
  color: rgb(298, 298, 298);
  display: flex;
  width: 90%;
  flex-direction: row;
  padding: 45px 10px;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 376px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 20px;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      color: hsl(0, 0%, 25%);
    }
  }

  @media screen and (max-width: 376px) {
    z-index: 2;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    flex-direction: column;
    align-items: baseline;
    background: white;
    color: black;
    margin: 45px 20px 0;
    border-radius: 6px;
    width: 80%;
    transition: transform 0.2s ease-in-out;
    transform: ${(props) =>
      props.show ? "translateX(125%)" : "translateX(0px)"};
    p {
      padding: 25px 20px;
      border-bottom: 1px solid hsl(0, 0%, 69%);
      width: 100%;
      font-weight: 500;

      &:last-child {
        border: none;
      }
    }
  }
`;

const NavIcons = styled.span`
  display: none;
  @media screen and (max-width: 376px) {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 40px;
    right: 50px;
    img {
      display: block;
      width: 50%;
      height: 50%;
    }
  }
`;

export default HeroSection;
