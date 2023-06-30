import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import { red } from '@mui/material/colors';
import { FaUser } from 'react-icons/fa';

import { SideBar, Navbar } from '../components';
import { RootState, Setting } from '../redux/types';

const SettingsPage: React.FC = () => {
  const displayName = useSelector((state: RootState) => state.user.displayName);
  const imageUri: any = useSelector((state: RootState) => state.user.imageUri);
  const playlistCount = useSelector((state: RootState) => state.spotify.playlists).length;
  // TODO: Compute and load organization level from backend
  const organizationLevel = 4;

  // TODO: Load settings from backend to redux store on landing, load data locally through useEffect
  const [settings, setSettings] = useState<Setting[]>([
    { 
      id: 0,
      name: 'Display', 
      description: 'Switch between dark mode and light mode',
      switch: true,
    },
    { 
      id: 1,
      name: 'Data and Privacy', 
      description: 'Share created labels with other users',
      switch: false,
    },
    { 
      id: 2,
      name: 'Additional setting', 
      description: 'Additional setting description',
      switch: true,
    },
  ]);

  const handleSettingChange = (settingId: number, checked: boolean) => {
    setSettings(settings.map((setting: Setting) =>
      setting.id === settingId ? { ...setting, switch: checked } : { ...setting }
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <SideBar />
      
      <div className="ml-28 p-6 px-12">
        <Navbar />
      </div>
     
      <div className="px-96">
        <div className="flex flex-row items-center mx-auto mt-20 w-full">
          <div className="mr-10">
          {imageUri?.length > 0 ? (
            <Avatar 
              alt="Profile Picture" 
              src={imageUri[0]["url"]} 
              sx={{ width: 150, height: 150 }}
            />
          ) : (
            <Avatar 
              sx={{ bgcolor: red[400], width: 150, height: 150, fontSize: 50 }}
            >
              <FaUser className="text-white" />
            </Avatar>
          )}
          </div>
          <div className="w-full">
            <h1 className="text-white font-bold text-4xl">{displayName}</h1>
            <div className="flex flex-row mt-5">
              <h1 className="text-white font-semibold text-lg">Playlist Count: {playlistCount}</h1>
              <h1 className="text-white font-semibold text-lg ml-14">
                Organization Level: {organizationLevel}/10
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-zinc-800 mx-auto w-full mt-10 h-80 rounded-lg px-14 py-5 divide-y divide-zinc-700">
          {settings.map((setting: Setting, index) => (
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-white font-semibold text-xl mt-4">{setting.name}</h1>
                <h1 className="text-white font-medium text-sm mt-2 mb-4">{setting.description}</h1>
              </div>
              <Switch 
                color="default"
                checked={setting.switch}
                onChange={(e) => handleSettingChange(setting.id, e.target.checked)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;