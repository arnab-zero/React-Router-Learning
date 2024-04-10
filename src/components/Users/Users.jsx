import { useLoaderData, Link } from "react-router-dom";

const Users = () => {
  const userInfoStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "10px",
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  };
  const users = useLoaderData();
  return (
    <div>
      <p>Number of users: {users.length}</p>
      <h3>User details: </h3>
      <div style={gridStyle}>
        {users.map((user) => (
          <div key={user.id} style={userInfoStyle}>
            <h2>Name: {user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            {/* <Link to="/user/:id">View Details</Link> */}
            <Link to={`/users/${user.id}`}>Show Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
