import {useLoaderData} from 'react-router-dom';


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;

    return (
        <div>
            <h2>Post Details About ID: {id}</h2>
            <h3>Post Title:  {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;