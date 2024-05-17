import { Outlet } from "react-router-dom";
import Navbar from "../components/Root/Navbar";
const Root = () => {
  return (
    <div className="h-screen dark:bg-dark-primary">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
