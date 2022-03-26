import styled from "styled-components";

export const SidemenuContainerStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  transition: 0.5s all ease-in-out;
  transform: translateX(${(props) => (props.show ? 0 : -100)}vw);
  background-color: ${(props) => props.theme.colors.dark["1"]};
`;

export const SidemenuItemStyle = styled.a`
  border-bottom: 2px solid white;
  text-decoration:none;
  cursor: pointer;
  padding: 1em 0.2em;
  margin-bottom: 0.5em;
  &:hover {
    background-color: #ffffff12;
  }
  display: flex;
  justify-content: space-between;
`;
export const MenuBoxStyle = styled.div`
  width: 450px;
  @media (max-width: 768px) {
    width: 100%;
  }
  transition: 2s all ease-in;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;
