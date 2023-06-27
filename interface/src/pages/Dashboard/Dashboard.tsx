import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState, Playlist } from '../../redux/types';
import { setPlaylists, setUpdates } from '../../redux/actions/spotifyActions';
import { 
  SideBar, 
  Navbar, 
  PlaylistInfo, 
  UpdatePlaylist, 
  PlaylistLeaderboard,
  LibraryStructure, 
} from '../../components';
import { getUserPlaylistInfo } from '../../api';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const userPlaylists = useSelector((state: RootState) => state.spotify.playlists);
  const userUpdates = useSelector((state: RootState) => state.spotify.updates);

  const [playlistsLoading, setPlaylistsLoading] = useState(true);
  const [updatesLoading, setUpdatesLoading] = useState(true);

  useEffect(() => {
    const getPlaylists = async () => {
      if (accessToken) {
        const playlistInfo = await getUserPlaylistInfo(accessToken.toString());
        const playlists: Playlist[] = [];
        playlistInfo.map((playlist: any) => {
          // TODO: Get labels for each playlist from API here
          const labels: string[] = ['Bollywood', 'Upbeat', 'Car', 'Friends'];
          const formattedPlaylist: Playlist = {
            id: playlist.id,
            playlistCoverUri: playlist.images.length !== 0 ? playlist.images[0].url : '',
            playlistName: playlist.name,
            playlistLabels: labels,
          };
          playlists.push(formattedPlaylist);
        });
        dispatch((setPlaylists(playlists)));
        console.log(playlists);
        setPlaylistsLoading(false);
      } else {
        console.log("invalid access token");
      }
    };

    getPlaylists()
      .catch((error) => console.log(error.message));
  }, []);
  
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
            {playlistsLoading && (
              <h1 className="text-white font-bold text-3xl">Loading...</h1>
            )}
            {userPlaylists.map((playlist) => (
              <PlaylistInfo 
                playlistCoverUri={playlist.playlistCoverUri}
                playlistName={playlist.playlistName}
                playlistLabels={playlist.playlistLabels}
                addToUpdatePlaylistsFunc={() => {}}
              />
            ))}
          </div>
          <div className="w-1/3 h-80  bg-zinc-800 rounded-lg ml-5">
            
          </div>
        </div>
        <div className="flex flex-row mt-10">
          <div className="w-7/12 h-80 bg-zinc-800 rounded-lg mr-5">
            <LibraryStructure />
          </div>
          <div className="w-5/12 ml-5 mt-4">
            <div className="flex flex-row justify-between items-end">
             <h1 className="text-white font-bold text-xl">Favorite Playlists</h1>
             <p className="text-white text-sm">*In Past Week</p>
            </div>
            
            <div className="bg-zinc-800 rounded-lg h-64 mt-5">
              <PlaylistLeaderboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;