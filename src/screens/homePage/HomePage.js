import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../components/hooks/useForm";
import { signUp } from "../../constants/User";
import {goToLogin} from "../../routers/coordinator"
import { Button } from "../loginPage/styled";
import {DivForm, P} from "./styled"

function HomePage() {

  const history = useHistory();
  const {form, onChange} = useForm({name: "", nickname: "", email: "", password: "", profilePicture: ""})

  const handleInputChange = (event) =>{
    const {value, name} = event.target;

    onChange(value, name);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    signUp(form, history)
  }

  return (
    <div>
      <h1>Bem Vindos ao Photomet</h1>

      <DivForm>
        <h3>Cadastre-se!</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <label> Nome: </label>
            <input
              type="text"
              placeholder="Nome"
              name="name"
              value={form.name}
              onChange={handleInputChange}
            />

            <br />

            <label>Nickname: </label>
            <input
              type="text"
              placeholder="Nickname"
              name="nickname"
              value={form.nickname}
              onChange={handleInputChange}
            />

            <br />

            <label>Email: </label>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />

            <br />

            <label>Senha: </label>
            <input
              type="password"
              placeholder="Senha"
              name="password"
              value={form.password}
              onChange={handleInputChange}
            />

            <br />

            <label>Foto do Perfil: </label>
            <input
              type="text"
              placeholder="Imagem do Perfil"
              name="profilePicture"
              value={form.profilePicture}
              onChange={handleInputChange}
            />

            <br />

            <Button>Cadastar</Button>
          </form>

          <div>
            <P onClick={() => goToLogin(history)}>
              Já tem pacto com a gente? Clique aqui e faça o seu login
            </P>
          </div>
        </div>
      </DivForm>
    </div>
  );
}

export default HomePage;
