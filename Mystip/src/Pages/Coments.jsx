import "../styles/coments.css";
import { useEffect, useState } from "react";
import { Header } from "../componentes/Header";
import { Retangle } from "../componentes/Retangle";
import { Footer } from "../componentes/Footer";
import imageBox from "../assets/img/box-coments.svg";

// Componente para a página de comentários
export function Coments() {
  // Estado inicial do formulário
  const formInitil = {
    nome: "",
    sobrenome: "",
    idade: "",
    comentario: "",
  };

  // Estados para o formulário e os comentários
  const [formState, setFormState] = useState(formInitil);
  const [coments, setComents] = useState([]);

  // Função para lidar com a entrada de dados no formulário
  const handleInput = (event) => {
    const target = event.currentTarget;
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
  };

  // Função para submeter o formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { nome, sobrenome, idade, comentario } = formState;

    // Validação dos campos do formulário
    if (!nome.trim() || nome.trim().length > 15 || nome.trim().length < 4) {
      alert(
        "O campo de nome não pode ser vazio, maior que 14 e menor que 4 caractéres!"
      );
    } else if (
      !sobrenome.trim() ||
      sobrenome.trim().length > 40 ||
      sobrenome.trim().length < 4
    ) {
      alert(
        "O campo sobrenome não pode ser vazio, maior que 40 e menor que 4 caractéres!"
      );
    } else if (!idade || idade < 18 || idade > 120) {
      alert(
        "O campo de idade não pode ser vazio, menor que 18 ou maior que 120!"
      );
    } else if (!comentario.trim() || comentario.trim().length > 200) {
      alert(
        "O campo comentário não pode ser vazio e maior que 200 caractéres!"
      );
    }

    // Construção do objeto de comentário
    const formComents = {
      nome: nome.trim(),
      sobrenome: sobrenome.trim(),
      idade,
      comentario: comentario.trim(),
    };

    // Requisição para enviar o comentário
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formComents),
    };

    // Enviar o comentário para o servidor
    const response = await fetch(
      "http://localhost:3000/coments",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => data);

    // Limpar o formulário após o envio
    setFormState({ ...formInitil });

    // Atualizar a lista de comentários com o novo comentário
    setComents([...coments, response]);
  };

  // Função para obter os comentários do servidor
  const getComents = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Requisição para obter os comentários
    const response = await fetch(
      "http://localhost:3000/coments",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => data);

    // Atualizar o estado dos comentários com os comentários obtidos
    setComents(response);
  };

  // Efeito para carregar os comentários quando o componente for montado
  useEffect(() => {
    getComents();
  }, []);

  // Renderização da página de comentários
  return (
    <div>
      {/* Componente Retangle para fins decorativos */}
      <Retangle />
      <div className="box-coments">
        <div className="image-box">
          <img src={imageBox} alt="" />
        </div>
        <div className="form-coment">
          <div className="title-coment">
            <h1>Deixe seu feedback!</h1>
          </div>
          {/* Formulário para enviar um novo comentário */}
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="nome"></label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formState.nome}
                onChange={handleInput}
                placeholder="Nome"
                required
                maxLength={15}
                minLength={4}
                autoComplete="off"
              />
            </div>
            <div className="form-control">
              <label htmlFor="sobrenome"></label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={formState.sobrenome}
                onChange={handleInput}
                placeholder="Sobrenome"
                required
                minLength={4}
                maxLength={40}
                autoComplete="off"
              />
            </div>
            <div className="form-control">
              <label htmlFor="idade"></label>
              <input
                type="number"
                id="idade"
                name="idade"
                value={formState.idade}
                onChange={handleInput}
                placeholder="Idade"
                required
                min={18}
                max={120}
              />
            </div>
            <div
              className="form-control"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5%",
              }}
            >
              <label
                htmlFor="comentario"
                style={{
                  color: "#fff",
                  marginBottom: "5px",
                  fontSize: "1.3rem",
                }}
              >
                Deixe aqui seu comentário:
              </label>
              <textarea
                id="comentario"
                name="comentario"
                value={formState.comentario}
                onChange={handleInput}
                required
                maxLength={200}
                autoComplete="off"
              />
            </div>

            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      {/* Cabeçalho da página de comentários */}
      <Header path="/coments" />
      {/* Container para os comentários */}
      <div className="comentario-container">
        {coments.length > 0 &&
          coments.map((coment) => (
            <div key={coment.id} className="comentario">
              <p>Nome: {coment.nome}</p>
              <p>Sobrenome: {coment.sobrenome}</p>
              <p>Idade: {coment.idade}</p>
              <p>Comentário: {coment.comentario}</p>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}