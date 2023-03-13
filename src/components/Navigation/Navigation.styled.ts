import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.media.desktop};
  margin: 0 auto;
`;

export const StyledLogo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  span {
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  &.active {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`;
