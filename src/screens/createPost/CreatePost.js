import React from "react";
import { useHistory } from "react-router";
import { useForm } from "../../components/hooks/useForm";
import { createPost } from "../../constants/Post";
import {goToLogin} from "../../routers/coordinator"


function CreatePostPage() {
  const history = useHistory();
  const {form, onChange} = useForm({subtitle: "", file: "", name: "", collection: ""})

  const handleInputChange = (event)=>{
    const {value, name} = event.target;

    onChange(value, name)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    createPost(form, history);
  }

    const logout = (history) => {
      localStorage.removeItem("token");
      goToLogin(history);
    };


  return (
    <div>
      <button onClick={() => logout(history)}>Logout</button>

      <h2>Adicionar Foto</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="file"
          placeholder="Link da Imagem"
          value={form.file}
          onChange={handleInputChange}
        />

        <input
          placeholder="Legenda"
          name="subtitle"
          value={form.subtitle}
          onChange={handleInputChange}
        />

        <input
          placeholder="Tag"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />

        <input
          placeholder="Coleção"
          name="collection"
          value={form.collection}
          onChange={handleInputChange}
        />

        <button type={"submit"}>Publicar</button>
      </form>
    </div>
  );
}

export default CreatePostPage;
