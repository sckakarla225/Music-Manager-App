import React from 'react';
import { SideBar } from '../../components';

const ViewPlaylistsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <SideBar />
      <p className="text-black text-center">View Playlists Page</p>
    </div>
  );
};

export default ViewPlaylistsPage;