import styled from "styled-components";

export const BlogStyle = styled.article`
  cursor: pointer;
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  &:hover {
    background-color: ${(props) => props.theme.colors.dark["1"] + "05"};
  }
  border-left: 0.5px solid ${(props) => props.theme.colors.dark["1"] + "20"};
`;
