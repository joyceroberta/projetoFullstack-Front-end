import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../components/hooks/useForm";
import { login } from "../../constants/User";
import { goToSignup } from "../../routers/coordinator";
import { DivContainer, P, Button } from "./styled";

function LoginPage() {
  const history = useHistory();
  const { form, onChange } = useForm({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form, history);
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleInputChange}
        />
        
        <Button type={"submit"}>Login</Button>
      </form>

      <P onClick={() => goToSignup(history)}>
        "Ainda não faz parte da nossa seita? Clique aqui e faça o seu cadastro."
      </P>
    </div>
  );
}

export default LoginPage;
