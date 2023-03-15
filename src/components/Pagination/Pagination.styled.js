import styled from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
  list-style-type: none;
`;

export const PaginationItem = styled.li`
  padding: 0 ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(8)};
  text-align: center;
  margin: auto ${({ theme }) => theme.spacing(1)};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.spacing(4)};
  line-height: 1.43;
  font-size: ${({ theme }) => theme.spacing(3)};
  min-width: ${({ theme }) => theme.spacing(8)};
  transition: background-color 0.3s, color 0.3s;
  color: ${(props) => (props.disabled ? "gray" : " rgba(0, 0, 0, 0.87);")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  background-color: ${(props) =>
    props.selected ? "rgba(0, 0, 0, 0.08)" : "transparent"};
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;

export const StyledDOTS = styled(PaginationItem)`
  &:hover {
    background-color: transparent;
    cursor: default;
  }
`;
