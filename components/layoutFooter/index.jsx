import MaterialIcon from "../materialIcon";
import TextComponent from "../text";
import { FooterStyle } from "./style";

export default function LayoutFooterComponent() {
  return (
    <FooterStyle>
      <div className="container d-flex py-3">
        <div style={{ opacity: 0.5 }}>
          <TextComponent small>
            © 2022 - Desenhado e desenvolvido por <b>Matheus Barbosa</b>
          </TextComponent>
        </div>
      </div>
    </FooterStyle>
  );
}
