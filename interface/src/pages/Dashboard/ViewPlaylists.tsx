import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import { SideBar, Navbar, PlaylistInfoAll } from '../../components';
import { RootState } from '../../redux/types';

const ViewPlaylistsPage: React.FC = () => {
  const navigate = useNavigate();

  const userPlaylists = useSelector((state: RootState) => state.spotify.playlists);

  return (
    <div className="flex flex-col min-h-screen pb-20 bg-zinc-900">
      <SideBar />
      <div className="ml-28 p-6 px-12">
        <Navbar />
      </div>
      <div className="flex flex-row ml-32 p-6 px-12">
        <div className="flex flex-row">
          <MdArrowBack 
            color="white" 
            className="text-3xl cursor-pointer" 
            onClick={() => navigate('/dashboard')} 
          />
        </div>
        <div className="flex flex-row flex-wrap mx-20 overflow-y-auto">
          {userPlaylists.map((playlist) => (
            <PlaylistInfoAll 
              playlistCoverUri={playlist.playlistCoverUri}
              playlistName={playlist.playlistName}
              playlistLabels={playlist.playlistLabels}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewPlaylistsPage;