import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../redux/types';
import { setPlaylists, setUpdates } from '../../redux/actions/spotifyActions';
import { 
  SideBar, 
  Navbar, 
  PlaylistInfo, 
  UpdatePlaylist, 
  PlaylistLeaderboard 
} from '../../components';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const userPlaylists = useSelector((state: RootState) => state.spotify.playlists);
  const userUpdates = useSelector((state: RootState) => state.spotify.updates);

  useEffect(() => {
    
  }, [userPlaylists, userUpdates]);
  
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <SideBar />
      <div className="ml-28 p-6 px-12">
        <Navbar />
      </div>
      <div className="ml-32 p-6 px-12 flex flex-col h-screen">
        <div className="flex flex-row items-end">
          <div className="w-2/3 mr-5">
            <div className="flex flex-row justify-between items-end">
              <h1 className="text-white font-bold text-3xl">Your Playlists</h1>
              <p 
                className="text-red-400 font-semibold text-lg cursor-pointer"
                onClick={() => navigate('/playlists')}
              >
                See all
              </p>
            </div>
          </div>
          <div className="w-1/3 ml-5">
            <h1 className="text-white font-bold text-2xl">Update Status</h1>
          </div>
        </div>
        <div className="flex flex-row mt-5">
          <div className="w-2/3 h-80 bg-zinc-800 rounded-lg mr-5">
            
          </div>
          <div className="w-1/3 h-80  bg-zinc-800 rounded-lg ml-5">
            
          </div>
        </div>
        <div className="flex flex-row mt-10">
          <div className="w-7/12 h-80 bg-zinc-800 rounded-lg mr-5">
            
          </div>
          <div className="w-5/12 ml-5 mt-4">
            <div className="flex flex-row justify-between items-end">
             <h1 className="text-white font-bold text-xl">Favorite Playlists</h1>
             <p className="text-white text-sm">*In Past Week</p>
            </div>
            
            <div className="bg-zinc-800 rounded-lg h-64 mt-5">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;