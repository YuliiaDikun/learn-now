import styled from "styled-components";

export const VideoWrapper = styled.div`
  width: ${(props) => (props.preview ? "auto" : "320px")};
  height: auto;
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  .vjs-poster img {
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.preview ? "auto" : "700px")};
  }
`;
