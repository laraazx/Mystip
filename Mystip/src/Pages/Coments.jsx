import { useEffect, useState } from "react";
import { Header } from "../componentes/Header";

export function Coments() {
  const formInitil = {
    nome: "",
    sobrenome: "",
    idade: "",
    comentario: "",
  };

  const [formState, setFormState] = useState(formInitil);
  const [coments, setComents] = useState([]);

  const handleInput = (event) => {
    const target = event.currentTarget;

    const { value, name } = target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { nome, sobrenome, idade, comentario } = formState;

    //
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

    const formComents = {
      nome: nome.trim(),
      sobrenome: sobrenome.trim(),
      idade,
      comentario: comentario.trim(),
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formComents),
    };

    const response = await fetch(
      "http://localhost:3000/coments",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => data);

    setFormState({ ...formInitil });

    setComents([...coments, response]);
  };

  const getComents = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      "http://localhost:3000/coments",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => data);

    setComents(response);
  };

  useEffect(() => {
    getComents();
  }, []);

  return (
    <div>
      <Header path="/coments" />

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formState.nome}
            onChange={handleInput}
            placeholder="Digite seu nome"
            required
            maxLength={15}
            minLength={4}
            autoComplete="off"
          />
        </div>
        <div className="form-control">
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            value={formState.sobrenome}
            onChange={handleInput}
            placeholder="Digite seu sobrenome"
            required
            minLength={4}
            maxLength={40}
            autoComplete="off"
          />
        </div>
        <div className="form-control">
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            name="idade"
            value={formState.idade}
            onChange={handleInput}
            placeholder="Digite sua idade"
            required
            min={18}
            max={120}
          />
        </div>
        <div className="form-control">
          <label htmlFor="comentario">Comentário:</label>
          <input
            type="text"
            id="comentario"
            name="comentario"
            value={formState.comentario}
            onChange={handleInput}
            placeholder="Digite seu comentário"
            required
            maxLength={200}
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>

      {!!coments.length &&
        coments.map((coment) => (
          <div key={coment.id}>
            <p>Nome: {coment.nome}</p>
            <p>Sobrenome: {coment.sobrenome}</p>
            <p>Idade: {coment.idade}</p>
            <p>Comentário: {coment.comentario}</p>
          </div>
        ))}
    </div>
  );
}
