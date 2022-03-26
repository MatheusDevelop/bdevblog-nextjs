
import { HambuguerBoxStyle, HamburguerBarStyle } from "./style";

export default function HamburguerComponent(props={hambuguerState:1|2|3,white:false}) {
  return (
    <HambuguerBoxStyle
    onClick={props.onClick}
    >
      <HamburguerBarStyle
        white={props.white}
        comebackIcon={props.hambuguerState == 2}
        closeIcon={props.hambuguerState == 3}
      />
    </HambuguerBoxStyle>
  );
}
