import { Button } from '@nextui-org/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex flex-row max-w-6xl mx-auto justify-between items-center pt-10 pb-20'>
      <img src='src/assets/logo.svg' alt="Logo catatan kita" className="logo h-8" />
      <div className='flex flex-row gap-5'>
        <NavLink 
            to="/" 
            className={({ isActive }) => 
            `rounded-[20px] px-5 py-2 hover:bg-[#5647F9] hover:text-white ${isActive ? 'bg-[#5647F9] text-white' : 'border border-[#5647F9] text-[#5647F9] bg-white'}` 
            }
        >
            Home
        </NavLink>
        <NavLink 
            to="/catatan" 
            className={({ isActive }) => 
            `rounded-[20px] px-5 py-2 hover:bg-[#5647F9] hover:text-white ${isActive ? 'bg-[#5647F9] text-white' : 'border border-[#5647F9] text-[#5647F9] bg-white'}` 
            }
        >
            Catatan
        </NavLink>
        <NavLink 
            to="/favorit" 
            className={({ isActive }) => 
            `rounded-[20px] px-5 py-2 hover:bg-[#5647F9] hover:text-white ${isActive ? 'bg-[#5647F9] text-white' : 'border border-[#5647F9] text-[#5647F9] bg-white'}` 
            }
        >
            Favorit
        </NavLink>
        <NavLink 
            to="/tentang-kami" 
            className={({ isActive }) => 
            `rounded-[20px] px-5 py-2 hover:bg-[#5647F9] hover:text-white ${isActive ? 'bg-[#5647F9] text-white' : 'border border-[#5647F9] text-[#5647F9] bg-white'}` 
            }
        >
            Tentang Kami
        </NavLink>
      </div>
      <button className='flex flex-row items-center gap-3 rounded-full pl-8 pr-2 py-2 bg-white border border-[#5647F9] hover:bg-[#5647F9] hover:text-white'>
        <p>Login</p>
        <img className='bg-[#5647F9] rounded-full p-3 -rotate-45' src="src/assets/arrow.svg" alt="login" />
      </button>
    </nav>
  );
};

export default Navbar;