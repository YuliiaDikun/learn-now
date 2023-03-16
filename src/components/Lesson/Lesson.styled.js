import styled from "styled-components";
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
