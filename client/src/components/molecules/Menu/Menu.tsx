import { Navbar } from "../NavBar/NavBar";
import "./menu.scss";

import LogoNome from "../../../assets/images/nameLogo.png";

export function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-Logo">
        <img src={LogoNome} alt="Logo image"/>
      </div>
      <Navbar />
    </div>
  );
}
