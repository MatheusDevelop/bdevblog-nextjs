import { useState, useEffect } from "react";
import HamburguerComponent from "../hambuguer";
import { HeaderStyle, Logo, Slogan } from "./style";
import { useRouter } from "next/router";
import SidemenuComponent from "../sideMenu";

export default function LayoutHeaderComponent() {
  const router = useRouter();
  const hambuguerMenuIcon = 1;
  const comebackIcon = 2;
  const closeIcon = 3;
  const [menuOpened, setMenuOpened] = useState(false);
  const [hamburguerState, sethamburguerState] = useState(1);
  useEffect(() => {
    if (router.asPath == "/") sethamburguerState(hambuguerMenuIcon);
    if (router.asPath != "/") sethamburguerState(comebackIcon);
  }, [router.asPath]);

  const handleHamburguerClick = () => {
    if (router.asPath != "/") router.push("/");
    if (router.asPath == "/") {
      sethamburguerState(!menuOpened ? closeIcon : hambuguerMenuIcon);
      setMenuOpened(!menuOpened);
    }
  };
  return (
    <>
      <HeaderStyle disableGlass={menuOpened}>
        <div className="container d-flex align-items-center">
          <div style={{ marginRight: "2em" }}>
            <HamburguerComponent
              white={menuOpened}
              onClick={handleHamburguerClick}
              hambuguerState={hamburguerState}
            />
          </div>
          <Logo white={menuOpened}>barbosa dev.</Logo>
          <Slogan white={menuOpened}>blog</Slogan>
        </div>
      </HeaderStyle>
      <SidemenuComponent show={menuOpened} />
    </>
  );
}
