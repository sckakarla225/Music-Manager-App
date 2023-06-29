import React from 'react';
import { useParams } from 'react-router-dom';

import { SideBar, Navbar } from '../../components';

const EditLabelsPage: React.FC = () => {
  const { playlistId } = useParams();

  return (
    <div className="flex flex-col min-h-screen pb-20 bg-zinc-900">
      <SideBar />
      <div className="ml-28 p-6 px-12">
        <Navbar />
      </div>
      <div className="flex flex-row ml-32 p-6 px-12">
        <h1 className="text-white text-center font-bold">{playlistId}</h1>
      </div>
    </div>
  );
};

export default EditLabelsPage;