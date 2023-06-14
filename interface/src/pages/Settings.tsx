import React from 'react';
import { SideBar } from '../components';

const SettingsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <SideBar />
      <p className="text-white text-center">Settings Page</p>
    </div>
  );
};

export default SettingsPage;