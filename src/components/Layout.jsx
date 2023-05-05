/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import HiddenSidebar from "./HiddenSidebar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="lg:flex gap-2">
        <HiddenSidebar />
        <div className="w-12/12 lg:w-11/12 m-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
