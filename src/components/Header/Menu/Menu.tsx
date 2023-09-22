import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

interface MenuProps {
  open: boolean;
  handleClick: () => void;
  children: JSX.Element;
}

const MenuStl = styled.div<{ open: boolean }>`
  display: none;
  width: 15vh;
  justify-content: center;
  border: #5ca31a solid 1px;

  .container-menu {
    background-color: #bd31bd;
    position: absolute;
    top: 100px;
    padding-top: 0px;
    height: 200px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    transition: transform 0.3s ease;
  }

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

const MenuButton: React.FC<MenuProps> = ({ open, handleClick, children }) => {
  return (
    <MenuStl open={open}>
      {open ? (
        <>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            size={"3rem"}
            onClick={handleClick}
          />
          <div className="container-menu">{children}</div>
        </>
      ) : (
        <>
          <AiOutlineMenu
            style={{ cursor: "pointer" }}
            size={"3rem"}
            onClick={handleClick}
          />
        </>
      )}
    </MenuStl>
  );
};

export default MenuButton;
