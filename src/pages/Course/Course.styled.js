import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
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
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  video {
    width: 100%;
    object-fit: cover;
  }
`;
export const LessonTextWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LessonTitle = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  svg {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;

export const StyledOpenSpan = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(12)};
  cursor: pointer;
  transform: ${(props) => (props.clicked ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.3s, height 0.3s;
`;

export const VideoWrapper = styled.div`
  opacity: ${(props) => (props.open ? "1" : "0")};
  height: ${(props) => (props.open ? "auto" : "0px")};
  transition: opacity 0.3s;
`;
