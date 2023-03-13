import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  span {
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
  }
`;
