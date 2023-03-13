import React from "react";
import Logo from "components/Logo/Logo";
import { HeaderWrapper, NavList, StyledLink } from "./Navigation.styled";
const Navigation: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo/>
      <nav>
        <NavList>
          <li>
            <StyledLink to='/'>Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/course/:id">Course</StyledLink>
          </li>
        </NavList>
      </nav>
    </HeaderWrapper>
  );
};

export default Navigation;
