import styled from "styled-components";

export const H1Style = styled.h1`
  font-size: 3.375em;

  font-family: "Playfair Display", serif;
  color: ${(props) => (props.white ? "white" : props.theme.colors.dark["1"])};
  margin: 0px !important;
`;
export const H2Style = styled.h2`
  font-size: 2.25em;
  font-family: "Playfair Display", serif;
  color: ${(props) => (props.white ? "white" : props.theme.colors.dark["1"])};
  margin: 0px !important;
`;
export const H3Style = styled.h2`
  font-size: 1em;
  font-family: "Playfair Display", serif;
  color: ${(props) => (props.white ? "white" : props.theme.colors.dark["1"])};
  margin: 0px !important;
`;
export const PStyle = styled.p`
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => (props.white ? "white" : props.theme.colors.dark["1"])};
  margin: 0px !important;
`;
export const SmallStyle = styled.p`
  font-size: 0.667em;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => (props.white ? "white" : props.theme.colors.dark["1"])};
  margin: 0px !important;
`;
