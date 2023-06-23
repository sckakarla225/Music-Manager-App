import React from 'react';
import { SideBar, Navbar } from '../../components';

const OrganizeLibraryPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <SideBar />
      <div className="ml-28 p-4">
        <Navbar />
      </div>
      <p className="text-black text-center">Organize Library Page</p>
    </div>
  );
};

export default OrganizeLibraryPage;