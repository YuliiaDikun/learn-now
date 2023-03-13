import React from "react";
import { HeaderWrapper, StyledLogo, NavList, StyledLink } from "./Navigation.styled";
const Navigation: React.FC = () => {
  return (
    <HeaderWrapper>
      <StyledLogo to="/">
        <span>Learn</span>now
      </StyledLogo>
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
