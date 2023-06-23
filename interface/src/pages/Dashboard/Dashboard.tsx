import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import { SideBar, Navbar, PlaylistInfo, UpdatePlaylist, PlaylistLeaderboard } from '../../components';

const DashboardPage: React.FC = () => {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <SideBar />
      <div className="ml-28 p-6 px-12">
        <Navbar />
      </div>
      <p className="text-black text-center">Organize Library Page</p>
    </div>
  );
};

export default DashboardPage;