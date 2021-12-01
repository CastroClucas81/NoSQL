import { Component } from "react";
import api from "./api";
import "./app.css";

class App extends Component {
  state = {
    artigos: [],
  };

  async componentDidMount() {
    const response = await api.get("/listar-artigos");

    console.log(response.data);

    this.setState({ artigos: response.data });
  }

  render() {
    const { artigos } = this.state;

    return (
      <div className="app">
        <h1>Lista de artigos</h1>
        <ul>
          {artigos.map((artigo) => (
            <li key={artigo._id}>
              <h2>Título: {artigo.titulo}</h2>
              <p>Conteúdo: {artigo.conteudo}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
