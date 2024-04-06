import { Link } from "react-router-dom"; // Importa o componente Link do React Router
import "../Header/style.css"; // Importa os estilos do cabeçalho

// Componente Header
export function Header(props) {
  // Definição das rotas e seus respectivos nomes e paths
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
          {/* Mapeia as rotas e cria os links correspondentes */}
          {routes.map((route) => (
            <li
              key={route.path}
              className={props.path === route.path ? "isSelected" : undefined}
            >
              {/* Link para a rota com o nome correspondente */}
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
