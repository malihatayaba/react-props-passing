/* eslint-disable react/prop-types */
import "../Css/Post.css"
const Post = ({post}) => {
    const { title, body } = post;
    return (
      <div className="cards">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  };
  
  export default Post;
  