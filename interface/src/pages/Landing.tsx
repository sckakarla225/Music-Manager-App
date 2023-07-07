import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setBasicInfo } from '../redux/actions/userActions';
import { 
  handleSpotifyAuthentication, 
  handleSpotifyAccessToken,
  getUserBasicInfo, 
} from '../api';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/LandingLogo.jpg';
import spotifyLogo from '../assets/spotifylogo.png';
import iTunesLogo from '../assets/ituneslogo.png';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // TODO: Add error handling using unset functions
  const handleSpotifyCallback = async () => {
    const accessToken = handleSpotifyAccessToken();
    if (accessToken != '') {
      dispatch(setUser(accessToken));
      console.log(accessToken);
      const userInfo = await getUserBasicInfo(accessToken);
      console.log(userInfo);
      dispatch(setBasicInfo(
        userInfo?.id, 
        userInfo?.display_name, 
        userInfo?.external_urls.spotify, 
        userInfo?.images, 
        userInfo?.email 
      ));
      navigate("/dashboard");
    };
  }

  useEffect(() => {
    handleSpotifyCallback();
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className= "border-gray-200 bg-black">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
          <div className="flex flex-row items-center">
            <a href="/" className="flex items-center">
              <img src={logo} className="h-10" alt="Busking Logo" />
            </a>
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
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline mb-6 w-1/5 mx-auto"
        onClick={handleSpotifyAuthentication}
      >
        <div className="flex flex-row justify-center items-center">
          <img src={spotifyLogo} width={30} height={25} />
          <p className="text-lg ml-5">Log in with Spotify</p>
        </div>
      </button>
      <button 
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline mb-6 w-1/5 mx-auto"
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