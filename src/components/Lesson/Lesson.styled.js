import styled from "styled-components";
export const VideoItem = styled.li`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
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
  margin: 0 auto;
  opacity: ${(props) => (props.open ? "1" : "0")};
  height: ${(props) => (props.open ? "auto" : "0px")};
  transition: opacity 0.3s;
`;

export const ProgressBarContainer = styled.div`
  height: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid #e5f1ef;
  background-color: #e5f1ef;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;
export const ProgressBar = styled.div`
  height: 100%;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.spacing(1)};
`;
