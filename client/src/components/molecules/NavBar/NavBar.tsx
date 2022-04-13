import { Link, useRouteMatch } from "react-router-dom";
import "./NavBar.scss";

export type Props = {
  label: string;
  to: string;
  activeOnlyWhenExact: boolean;
};

export function MenuLink(props: Props) {
  const { label, to, activeOnlyWhenExact } = props;
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div>
      <Link className={match ? "active" : ""} to={to}>
        {label}
      </Link>
    </div>
  );
}

export function Navbar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li>
            <MenuLink activeOnlyWhenExact={true} label={"Home"} to="/homePage" />
          </li>
          <li>
            {" "}
            <MenuLink activeOnlyWhenExact={true} label={"Picks"} to="/picks" />
          </li>
          <li>
            {" "}
            <MenuLink activeOnlyWhenExact={true} label={"Bans"} to="/bans" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
