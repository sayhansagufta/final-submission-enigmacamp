import { Button } from "@nextui-org/react";
// import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row max-w-6xl mx-auto justify-between items-center pt-10 pb-20">
      <img src="src/assets/svg/logo.svg" alt="Logo catatan kita" className="logo h-8" />
      <div className="flex flex-row gap-5">
        <NavLink to="/" className={({ isActive }) => `rounded-[20px] px-5 py-2 hover:bg-[#5647F9] hover:text-white ${isActive ? "bg-[#5647F9] text-white" : "border border-[#5647F9] text-[#5647F9] bg-white"}`}>
          Home
        </NavLink>
        <NavLink to="/catatan" className={({ isActive }) => `rounded-[20px] px-5 py-2 hover:bg-[#5647F9] hover:text-white ${isActive ? "bg-[#5647F9] text-white" : "border border-[#5647F9] text-[#5647F9] bg-white"}`}>
          Catatan
        </NavLink>
        <NavLink to="/favorit" className={({ isActive }) => `rounded-[20px] px-5 py-2 hover:bg-[#5647F9] hover:text-white ${isActive ? "bg-[#5647F9] text-white" : "border border-[#5647F9] text-[#5647F9] bg-white"}`}>
          Favorit
        </NavLink>
        <NavLink to="/tentang-kami" className={({ isActive }) => `rounded-[20px] px-5 py-2 hover:bg-[#5647F9] hover:text-white ${isActive ? "bg-[#5647F9] text-white" : "border border-[#5647F9] text-[#5647F9] bg-white"}`}>
          Tentang Kami
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `rounded-[20px] px-5 py-2 hover:bg-[#5647F9] 
hover:text-white ${isActive ? "bg-[#5647F9] text-white" : "border border-[#5647F9] text-[#5647F9] bg-white"}`
          }
        >
          User
        </NavLink>
      </div>
      <NavLink to="/login">
        <Button
          radius="full"
          className="bg-white border border-[#5647F9] hover:bg-[#5647F9] hover:text-white group"
          endContent={<img className="bg-[#5647F9] -rotate-45 group-hover:rotate-0 size-7 p-1 -me-2 transition duration-500  rounded-full " src="src/assets/svg/arrow.svg" alt="login" />}
        >
          Login
        </Button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
