import { useHistory } from "react-router-dom";
import { goToPost } from "../../routers/coordinator";
import { Pictures, ProfileImg, DivProfile, DivPost, CardContainer } from "./styled";

function PostCard(props) {
  const history = useHistory();

  return (
    <CardContainer>
      <DivProfile>
        <ProfileImg src={props.profilePicture} />
        <h4>{props.nickname}</h4>
      </DivProfile>

      <DivPost>
        <Pictures src={props.file} />
        <p>{props.subtitle}</p>
      </DivPost>

      <p onClick={() => goToPost(history, props.id)}>Detalhes</p>
    </CardContainer>
  );
}

export default PostCard;
