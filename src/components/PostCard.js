import { useHistory } from "react-router-dom";


function PostCard(props){
    const history = useHistory();

    return (
      <div>
        <h4>{props.nickname}</h4>
        <img src={props.profilePicture} />
        <p>{props.subtitle}</p>
        <p>{props.data}</p>
        <img src={props.file} />
        <p>{props.collection}</p>
        <p>{props.name}</p>      
      </div>
    );
}

export default PostCard;