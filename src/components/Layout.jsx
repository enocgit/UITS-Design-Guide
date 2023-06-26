/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import HiddenSidebar from "./HiddenSidebar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="gap-2 lg:flex">
        <HiddenSidebar />
        <div className="w-12/12 m-2 lg:w-11/12">
          <Outlet />
        </div>
      </div>
    </>
  );
}
