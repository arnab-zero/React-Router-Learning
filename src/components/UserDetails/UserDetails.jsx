import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;

  return (
    <div>
      <h2>{name}</h2>
      <h4>{website}</h4>
    </div>
  );
};

export default UserDetails;
