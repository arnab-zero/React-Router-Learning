import { Link } from "react-router-dom";

const Header = () => {
  const linkStyle = {
    fontSize: "24px",
    padding: "4px",
    marginRight: "8px",
  };

  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/users" style={linkStyle}>Users</Link>
        <Link to="/contact" style={linkStyle}>Contact Us</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </nav>
    </div>
  );
};

export default Header;
