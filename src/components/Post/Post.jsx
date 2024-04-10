import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const postInfoStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "10px",
  };

  return (
    <div style={postInfoStyle}>
      <h2>Post ID: {id}</h2>
      <h3>Post Title: {title}</h3>
      <Link to={`/post/${id}`}>Post Details</Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
