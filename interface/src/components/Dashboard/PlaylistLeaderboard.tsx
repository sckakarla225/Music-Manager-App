import React from 'react';
import { useSelector } from 'react-redux';

import { RootState, Playlist } from '../../redux/types';
import DefaultPlaylistCover from '../../assets/DefaultPlaylistCover.png';

const PlaylistLeaderboard: React.FC = () => {
  // TODO: Compute and load top 3 playlists and time spent listening from backend in useEffect
  // TODO: Manage loading state locally after 3 playlists are loaded
  const userPlaylists = useSelector((state: RootState) => state.spotify.playlists);
  
  const goldPlaylist: Playlist = userPlaylists[0];
  const silverPlaylist: Playlist = userPlaylists[1];
  const bronzePlaylist: Playlist = userPlaylists[2];

  const goldTimeSpent = '2 hr 15 min';
  const silverTimeSpent = '1 hr 45 min';
  const bronzeTimeSpent = '1 hr 15 min';
  
  return (
    <div className="flex flex-row px-14 py-6 justify-between">
      
      <div className="flex flex-col mt-6">
        <div className="flex flex-row mx-auto items-center rounded-full bg-red-400 w-16 h-16 drop-shadow-2xl">
          <h1 className="text-white font-black mx-auto text-xl">2</h1>
        </div>
        <div className="flex flex-row mx-auto mt-5">
          <img 
            src={silverPlaylist.playlistCoverUri !== '' ? silverPlaylist.playlistCoverUri : DefaultPlaylistCover} 
            className="w-12 h-12 rounded-lg"
          />
        </div>
        <div className="flex flex-col mx-auto mt-3">
          <h1 className="text-white font-semibold text-sm text-center">Time Spent</h1>
          <h1 className="text-white font-normal text-xs text-center">{silverTimeSpent}</h1>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex flex-row mx-auto items-center rounded-full bg-red-400 w-20 h-20 drop-shadow-2xl">
          <h1 className="text-white font-black mx-auto text-3xl">1</h1>
        </div>
        <div className="flex flex-row mx-auto mt-5">
          <img 
            src={goldPlaylist.playlistCoverUri !== '' ? goldPlaylist.playlistCoverUri : DefaultPlaylistCover} 
            className="w-12 h-12 rounded-lg"
          />
        </div>
        <div className="flex flex-col mx-auto mt-3">
          <h1 className="text-white font-semibold text-sm text-center">Time Spent</h1>
          <h1 className="text-white font-normal text-xs text-center">{goldTimeSpent}</h1>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <div className="flex flex-row mx-auto items-center rounded-full bg-red-400 w-12 h-12 drop-shadow-2xl">
          <h1 className="text-white font-black mx-auto text-xl">3</h1>
        </div>
        <div className="flex flex-row mx-auto mt-5">
          <img 
            src={bronzePlaylist.playlistCoverUri !== '' ? bronzePlaylist.playlistCoverUri : DefaultPlaylistCover} 
            className="w-12 h-12 rounded-lg"
          />
        </div>
        <div className="flex flex-col mx-auto mt-3">
          <h1 className="text-white font-semibold text-sm text-center">Time Spent</h1>
          <h1 className="text-white font-normal text-xs text-center">{bronzeTimeSpent}</h1>
        </div>
      </div>

    </div>
  );
};

export default PlaylistLeaderboard;