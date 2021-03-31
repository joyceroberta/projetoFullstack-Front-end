import React from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../../components/hooks/useRequestData";
import {useProtectPage} from "../../components/hooks/useProtectPage"
import { baseUrlPost } from "../../constants/constants";
import { goToCreate, goToLogin } from "../../routers/coordinator";
import PostCard from "../../components/postCard/PostCard"
import { DivButtons } from "./styled";
import { Button } from "../loginPage/styled";

function FeedPage() {

  const history = useHistory()
   useProtectPage()

   const posts = useRequestData(`${baseUrlPost}/all`, [])

   const logout = (history) =>{
     localStorage.removeItem("token");
     goToLogin(history)
   }


  return (
    <div>
      <DivButtons>
        <Button onClick={() => logout(history)}>Logout</Button>

        <Button onClick={() => goToCreate(history)}> Criar Post </Button>
      </DivButtons>

      <br />

      {posts.map((post) => {
        return (
          <PostCard
            id={post.id}
            subtitle={post.subtitle}
            file={post.file}
            name={post.name}
            collection={post.collection}
            author_id={post.author_id}
            nickname={post.nickname}
            profilePicture={post.profilePicture}
          />
        );
      })}
    </div>
  );
}

export default FeedPage;

