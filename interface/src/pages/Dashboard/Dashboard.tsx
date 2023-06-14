import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import { SideBar } from '../../components';

const DashboardPage: React.FC = () => {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <SideBar />
      <p className="text-black text-center">Dashboard Page</p>
      
    </div>
  );
};

export default DashboardPage;