import React from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../../components/hooks/useRequestData";
import {useProtectPage} from "../../components/hooks/useProtectPage"
import { baseUrlPost } from "../../constants/constants";
import { goToLogin } from "../../routers/coordinator";
import PostCard from "../../components/PostCard"

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
      <button onClick={() => logout(history)}>Logout</button>
      {posts.map((post) =>{
        return(
          <PostCard
            id={post.id}
            subtitle={post.subtitle}
            file={post.file}
            date={post.date}
            name={post.name}
            collection={post.collection}
            author_id={post.author_id}
            nickname={post.nickname}
            profilePicture={post.profilePicture}
          />
        )
      })}


      
    </div>
  );
}

export default FeedPage;

