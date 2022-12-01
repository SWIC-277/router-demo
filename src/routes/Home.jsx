import { Outlet } from "react-router-dom";
import Button from "../components/FormButton";
import Nav from "../components/Nav";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="flex gap-x-24">
      <div className="h-screen w-1/5 bg-gray-300 pl-12">
        <h1>React Router Contacts</h1>
        <div className="flex items-center gap-x-2 border-b border-black pb-4">
          <Search />
          <Button />
        </div>
        <Nav />
      </div>
      <Outlet />
    </div>
  );
}
