import React from 'react';
import { SideBar } from '../../components';

const EditLabelsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <SideBar />
      <p className="text-black text-center">Edit Labels Page</p>
    </div>
  );
};

export default EditLabelsPage;