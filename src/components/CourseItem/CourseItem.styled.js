import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledItem = styled(Link)`
  width: 100%;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(2)};
  @media screen and (min-width: 768px) {
    width: calc((100% - 120px) / 2);
  }
`;

export const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  height: 100%;
  list-style: none;
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;
export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-top-left-radius: ${({ theme }) => theme.spacing(2)};
  border-top-right-radius: ${({ theme }) => theme.spacing(2)};
  height: 250px;
  video {
    display: block;
    width: 100%;
    min-height: 100%;
    object-fit: contain;
  }
  @media screen and (min-width: 768px) {
  }
`;
export const DescWrapper = styled.div`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;
export const CourseText = styled.div`
  font-size: ${({ theme }) => theme.spacing(5)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  padding-bottom: 5px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(3)};
  border-top: 1px solid ${({ theme }) => theme.colors.dark};
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
  }
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledSkils = styled.p`
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.spacing(5)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
`;

export const SkillsList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing(5)};
`;
export const StyledSkillItem = styled.li`
  list-style: circle;
`;
