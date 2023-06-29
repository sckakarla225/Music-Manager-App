import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md';

import { setUpdates } from '../../redux/actions/spotifyActions';
import { RootState, Update } from '../../redux/types';
import DefaultPlaylistCover from '../../assets/DefaultPlaylistCover.png';

interface PlaylistInfoProps {
  playlistId: string,
  playlistCoverUri: string,
  playlistName: string,
  playlistLabels: string[],
}

const PlaylistInfo: React.FC<PlaylistInfoProps> = ({
  playlistId, 
  playlistCoverUri,
  playlistName,
  playlistLabels,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userUpdates = useSelector((state: RootState) => state.spotify.updates);

  const addToUpdates = (playlistId: string) => {
    let exists = false;
    for (let i = 0; i < userUpdates.length; i++) {
      if (userUpdates[i].id === playlistId) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      const newUpdate: Update = {
        id: playlistId,
        playlistCoverUri: playlistCoverUri,
        playlistName: playlistName,
        updateComplete: false,
      };
      dispatch(setUpdates([...userUpdates, newUpdate]));
    } // TODO: Add alt case handling here
  }

  const goToEditLabels = (playlistId: string) => navigate(`/edit-labels/${playlistId}`);

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
          <FaEdit 
            color="white" 
            className="text-xl cursor-pointer"
            onClick={() => goToEditLabels(playlistId)} 
          />
          <div 
            className="flex flex-row items-center rounded-full bg-red-500 w-10 h-10 hover:bg-red-400 cursor-pointer"
            onClick={() => addToUpdates(playlistId)}
          >
            <MdUpdate color="white" className="mx-auto text-xl" />
          </div>
      </div>
    </div>
  );
};

export default PlaylistInfo;