import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md';

import DefaultPlaylistCover from '../../assets/DefaultPlaylistCover.png';

interface PlaylistInfoProps {
  playlistCoverUri: string,
  playlistName: string,
  playlistLabels: string[],
  addToUpdatePlaylistsFunc: Function,
}

const PlaylistInfo: React.FC<PlaylistInfoProps> = ({ 
  playlistCoverUri,
  playlistName,
  playlistLabels,
  addToUpdatePlaylistsFunc,
}) => {
  return (
    <div className="flex flex-col justify-between bg-zinc-700 p-4 rounded-md mr-5">
      <div className="w-full">
        <img 
          src={playlistCoverUri !== '' ? playlistCoverUri : DefaultPlaylistCover} 
          className="w-48 h-48 rounded-lg mx-auto drop-shadow-md"
        />
        <div className="w-48 mx-auto">
          <h1 className="text-white truncate mt-3 font-semibold">{playlistName}</h1>
          <div className="flex flex-row flex-wrap h-20 mt-3 overflow-y-auto">
            {playlistLabels.map((label) => (
              <div className="rounded-sm bg-red-500 mr-3 mb-3 py-2 px-3">
                <h1 className="text-white text-xs font-semibold">{label}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-48 mx-auto mt-3">
          <FaEdit color="white" className="text-xl cursor-pointer" />
          <div className="flex flex-row items-center rounded-full bg-red-500 w-10 h-10 hover:bg-red-400 cursor-pointer">
            <MdUpdate color="white" className="mx-auto text-xl" />
          </div>
      </div>
    </div>
  );
};

export default PlaylistInfo;