import styled from "styled-components";

export const VideoWrapper = styled.div`
  width: 320px;
  height: auto;
  padding-bottom: 40px;

  .vjs-poster img {
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;
