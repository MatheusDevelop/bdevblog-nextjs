import { H1Style, H2Style, H3Style, PStyle, SmallStyle } from "./style";

export default function TextComponent(props) {
  return (
    <>
      {props.h1 && <H1Style white={props.white}>{props.children}</H1Style>}
      {props.h2 && <H2Style white={props.white}>{props.children}</H2Style>}
      {props.h3 && <H3Style white={props.white}>{props.children}</H3Style>}
      {props.p && <PStyle white={props.white}>{props.children}</PStyle>}
      {props.small && (
        <SmallStyle white={props.white}>{props.children}</SmallStyle>
      )}
    </>
  );
}
