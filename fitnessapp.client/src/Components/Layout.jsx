import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Layout() {
  return (
    <>
      <Navbar webname="FitMen" />
      <Outlet />
    </>
  );
}

export default Layout;
