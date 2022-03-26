import MaterialIcon from "../materialIcon";
import TextComponent from "../text";
import {
  MenuBoxStyle,
  SidemenuContainerStyle,
  SidemenuItemStyle,
} from "./style";

export default function SidemenuComponent(props = { show: false }) {
  return (
    <SidemenuContainerStyle show={props.show}>
      <div className="container" style={{ height: "100%" }}>
        <div
          style={{ height: "100%" }}
          className="row align-items-center justify-content-center"
        >
          <MenuBoxStyle show={props.show}>
            <div>
              <TextComponent p white>
                MENU
              </TextComponent>
            </div>
            <div className="mt-3">
              <SidemenuItemStyle
                href="https://www.linkedin.com/in/matheus-vieira-4a7597172/"
                target="_blank"
              >
                <div>
                  <TextComponent p white>
                    Linkedin
                  </TextComponent>
                </div>
                <div>
                  <MaterialIcon white iconName="south_east" size={24} />
                </div>
              </SidemenuItemStyle>
              <SidemenuItemStyle
                href="https://github.com/MatheusDevelop"
                target="_blank"
              >
                <div>
                  <TextComponent p white>
                    Github
                  </TextComponent>
                </div>
                <div>
                  <MaterialIcon white iconName="south_east" size={24} />
                </div>
              </SidemenuItemStyle>
            </div>
          </MenuBoxStyle>
        </div>
      </div>
    </SidemenuContainerStyle>
  );
}
