import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledCourse = styled.div`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(7)};
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(7)};
  }
`;

export const GoBackLink = styled(Link)`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.accent};
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }
`;
export const DescrWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`;

export const StyledProductTitle = styled.h2`
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const StyledP = styled.p`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const VideoItem = styled.li`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  video {
    width: 100%;
    object-fit: cover;
  }
`;
export const LessonTitle = styled.p`
  font-weight: 500;

  font-size: ${({ theme }) => theme.fontSizes.medium};
  svg {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;
