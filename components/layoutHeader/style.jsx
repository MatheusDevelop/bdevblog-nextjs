import styled, { css } from "styled-components";

export const HeaderStyle = styled.header`
  height: 80px;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.dark[1]};
  display: flex;
  align-items: center;
  transition: 0.1s all ease-in-out;
  backdrop-filter: blur(20.9px);
  -webkit-backdrop-filter: blur(10.9px);
  ${(props) =>
    !props.disableGlass &&
    css`
      background: rgba(255, 255, 255, 0.2);
    `}
`;
export const Logo = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 18px;
  transition: 0.5s all ease-in-out;
  color: ${(props) => (props.white ? "white" : props.theme.colors.dark["1"])};
`;
export const Slogan = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 12px;
  opacity: 0.5;
  transition: 0.5s all ease-in-out;
  color: ${(props) => (props.white ? "white" : props.theme.colors.dark["1"])};
`;
