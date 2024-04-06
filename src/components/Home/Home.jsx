import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <h2>This is the homepage to this website</h2>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
