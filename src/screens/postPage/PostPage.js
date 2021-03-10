import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useProtectPage } from "../../components/hooks/useProtectPage";
import { DivPost, DivProfile, Pictures, ProfileImg } from "../../components/postCard/styled";
import { baseUrlPost } from "../../constants/constants";
import { goToFeed } from "../../routers/coordinator";

function PostPage(props) {
  const history = useHistory();
  useProtectPage();

  const params = useParams();

  const [details, setDetails] = useState([]);

  const getPostDetails = () => {
    axios
      .get(`${baseUrlPost}/${params.id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getPostDetails();
  }, [details]);

  return (
    <div>
      {details.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <DivProfile>
            <h4>{details.nickname}</h4>
            <ProfileImg src={details.profilePicture} />
          </DivProfile>
          <DivPost>
            <Pictures src={details.file} />
            <p>{details.subtitle}</p>
            <p>{details.date}</p>
            <p>{details.collection}</p>
            <p>#{details.name}</p>
          </DivPost>

          <p onClick={() => goToFeed(history)}>Voltar para o feed</p>
        </div>
      )}
    </div>
  );
}

export default PostPage;
