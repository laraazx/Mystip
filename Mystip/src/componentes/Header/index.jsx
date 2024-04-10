import { Link } from "react-router-dom"; // Importa o componente Link do React Router
import "../Header/style.css"; // Importa os estilos do cabeçalho

// Componente Header
export function Header(props) {
  // Definição das rotas e seus respectivos nomes e paths
  const routes = [
    { name: "HOME", path: "/" }, // Rota para a página inicial
    { name: "CATÁLOGO", path: "/catalog" }, // Rota para o catálogo
    { name: "SOBRE", path: "/about" }, // Rota para a página "Sobre"
    { name: "COMENTÁRIOS", path: "/coments" }, // Rota para os comentários
  ];

  // Props são propriedades passadas para um componente
  // No meu caso, o props está sendo usado para comparar com o path (props.path)
  // de cada rota definida no meu array, isso permite que o meu Header saiba qual rota está
  // selecionada e aplique a classe 'isSelected'

  return (
    <header>
      <div className="menu">
        <ul>
          {/* Mapeia as rotas e cria os links correspondentes */}
          {routes.map((route) => (
            <li
              key={route.path}
              // Adiciona a classe "isSelected" se a rota atual for selecionada
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
