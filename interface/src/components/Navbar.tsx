import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RxOpenInNewWindow } from 'react-icons/rx';

import { RootState } from '../redux/types';
import { unsetUser, unsetBasicInfo } from '../redux/actions/userActions';
import spotifyLogo from '../assets/spotifygreenlogo.png';


const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileID = useSelector((state: RootState) => state.user.profileID);
  const profileURL = useSelector((state: RootState) => state.user.profileURL);

  const logout = () => {
    dispatch(unsetUser());
    dispatch(unsetBasicInfo());
    navigate("/");
  };

  return (
    <div className="flex p-4 justify-between">
      <div className="flex flex-row items-center">
        <img src={spotifyLogo} className="" alt="Spotify Logo" width={30} height={30} />
        <h1 className="text-white font-semibold ml-5">
          {profileID}
        </h1>
        <a href={profileURL} target="_blank">
          <RxOpenInNewWindow
            className="cursor-pointer text-white ml-7" 
            size={25}
          />
        </a>
      </div>
      <button 
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
        onClick={logout}
      >
        <div className="flex flex-row justify-center items-center">
          <p className="text-sm">Logout</p>
        </div>
      </button>
    </div>
  );
};

export default Navbar;