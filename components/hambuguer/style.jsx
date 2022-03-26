import styled, { css } from "styled-components";
export const HambuguerBoxStyle = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;
export const HamburguerBarStyle = styled.div`
  width: 100%;
  height: 3px;
  transition: 0.5s all ease-in-out;
  background-color: ${(props) =>
    props.white ? "white" : props.theme.colors.dark[1]};
  &:after {
    top: 0px;
    transform: rotate(0deg);
    width: 100%;
    transition: 0.5s all ease-in-out;
    height: 3px;
    background-color: ${(props) =>
      props.white ? "white" : props.theme.colors.dark[1]};
    content: "";
    position: absolute;
  }
  &:before {
    width: 100%;
    height: 3px;
    transform: rotate(0deg);
    background-color: ${(props) =>
      props.white ? "white" : props.theme.colors.dark[1]};
    content: "";
    bottom: 0px;
    position: absolute;
    transition: 0.5s all ease-in-out;
  }

  ${(props) =>
    props.comebackIcon &&
    css`
      &:after {
        top: 0;
        width: 60%;
        height: 3px;
        transform: rotate(-45deg) translateX(-2px) translateY(-2px);
        background-color: ${(props) =>
          props.white ? "white" : props.theme.colors.dark[1]};
        content: "";
        position: absolute;
      }
      &:before {
        width: 60%;
        height: 3px;
        background-color: ${(props) =>
          props.white ? "white" : props.theme.colors.dark[1]};
        content: "";
        transform: rotate(45deg) translateX(-2px) translateY(2px);
        bottom: 0;
        position: absolute;
      }
    `}
  ${(props) =>
    props.closeIcon &&
    css`
      width: 100%;
      background-color: transparent;
      &:after {
        width: 100%;

        top: 14px;
        height: 3px;
        transform: rotate(-45deg);
        background-color: ${(props) =>
          props.white ? "white" : props.theme.colors.dark[1]};
        content: "";
        position: absolute;
      }
      &:before {
        width: 100%;
        height: 3px;
        background-color: ${(props) =>
          props.white ? "white" : props.theme.colors.dark[1]};
        content: "";
        transform: rotate(45deg);
        bottom: 13px;
        position: absolute;
      }
    `}
`;
