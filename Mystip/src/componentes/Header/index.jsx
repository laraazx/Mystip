import { Link } from "react-router-dom";
import "../Header/style.css";

export function Header(props) {
  const routes = [
    { name: "HOME", path: "/" },
    { name: "CATÁLOGO", path: "/catalog" },
    { name: "SOBRE", path: "/about" },
    { name: "COMENTÁRIOS", path: "/coments" },
  ];

  return (
    <header>
      <div className="menu">
        <ul>
          {routes.map((route) => (
            <li key={route.path} className={props.path === route.path ? 'isSelected' : undefined}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
