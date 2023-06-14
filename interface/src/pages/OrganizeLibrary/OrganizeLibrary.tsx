import React from 'react';
import { SideBar } from '../../components';

const OrganizeLibraryPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <SideBar />
      <p className="text-white text-center">Organize Library Page</p>
    </div>
  );
};

export default OrganizeLibraryPage;