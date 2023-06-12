import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/types';
import { setUserId, unsetUserId } from '../redux/actions/userActions';

import logo from '../assets/logo.png';
import spotifyLogo from '../assets/spotifylogo.png';
import iTunesLogo from '../assets/ituneslogo.png';

const LandingPage: React.FC = () => {
  const userId = useSelector((state: RootState) => state.user.userId);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(setUserId('sam'));
    console.log(userId);
  };

  const logout = () => dispatch(unsetUserId());

  return (
    <div className="flex flex-col min-h-screen">
      <nav className= "border-gray-200 bg-black">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
          <div className="flex flex-row items-center">
            <a href="/" className="flex items-center">
              <img src={logo} className="" alt="Busking Logo" width={40} height={40} />
            </a>
            <p className="text-white font-bold ml-3 text-lg">autotunes</p>
          </div>
        </div>
      </nav>
      <h1 className="text-7xl text-black text-center font-bold mt-32">
        Beatmatching your life
      </h1>
      <p className="text-lg text-black text-center font-semibold mt-10 mb-20">
        Organize all of your favorite songs with extreme precision.
      </p>
      <button 
        className="bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline mb-6 w-1/5 mx-auto"
        onClick={login}
      >
        <div className="flex flex-row justify-center items-center">
          <img src={spotifyLogo} width={30} height={25} />
          <p className="text-lg ml-5">Log in with Spotify</p>
        </div>
      </button>
      <button 
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline mb-6 w-1/5 mx-auto"
        onClick={logout}
      >
        <div className="flex flex-row justify-center items-center">
          <img src={iTunesLogo} width={30} height={25} />
          <p className="text-lg ml-5">Log in with iTunes</p>
        </div>
      </button>
    </div>
  )
}

export default LandingPage;