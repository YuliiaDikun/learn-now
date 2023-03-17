import styled from "styled-components";

export const VideoWrapper = styled.div`
  min-width: 320px;
  height: auto;
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  .vjs-poster img {
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    max-width: ${(props) => (props.preview ? "auto" : "700px")};
  }
`;
