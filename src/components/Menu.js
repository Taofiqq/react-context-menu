import React from "react";
import { MenuContextContainer } from "../styles/styles";

const Menu = ({ title, id }) => {
  return (
    <>
      <MenuContextContainer key={id}>{title}</MenuContextContainer>
    </>
  );
};

export default Menu;
