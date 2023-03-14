import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  max-width: ${({ theme }) => theme.media.desktop};
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledP = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
`;
