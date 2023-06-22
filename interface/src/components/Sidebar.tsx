import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { MdLibraryMusic, MdSettings } from 'react-icons/md';

const SideBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex">
      <aside className="flex flex-col justify-between w-28 fixed left-0 top-0 min-h-screen bg-black p-10">
        <div className="mt-5">
          <a href="/" className="flex items-center my-5">
            <img src={logo} className="" alt="Busking Logo" width={60} height={60} />
          </a>
          <AiFillHome 
            className={`my-5 cursor-pointer ${
              location.pathname == '/dashboard' 
                || location.pathname == '/playlists'
                || location.pathname == '/edit-labels' 
                ? 'text-red-500' : 'text-white'}`
            } 
            size={30}
            onClick={() => navigate('/dashboard')} 
          />
          <MdLibraryMusic 
            className={`my-5 cursor-pointer ${location.pathname == '/library' ? 'text-red-500' : 'text-white'}`} 
            size={30} 
            onClick={() => navigate('/library')}
          />
        </div>
        <div>
          <MdSettings
            onClick={() => navigate('/settings')} 
            size={30}
            className={`my-5 cursor-pointer ${location.pathname == '/settings' ? 'text-red-500' : 'text-white'}`}
          />
          <AiFillInfoCircle 
            className="text-white my-5 cursor-pointer" 
            size={30}  
          />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;