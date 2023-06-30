import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { FaEdit } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md';

import { setUpdates } from '../../redux/actions/spotifyActions';
import { RootState, Update } from '../../redux/types';
import DefaultPlaylistCover from '../../assets/DefaultPlaylistCover.png';

interface PlaylistInfoAllProps {
  playlistId: string,
  playlistCoverUri: string,
  playlistName: string,
  playlistLabels: string[],
}

const PlaylistInfoAll: React.FC<PlaylistInfoAllProps> = ({
  playlistId, 
  playlistCoverUri,
  playlistName,
  playlistLabels,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userUpdates = useSelector((state: RootState) => state.spotify.updates);
  const [isUpdating, setIsUpdating] = useState(false);

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

  useEffect(() => {
    for (let i = 0; i < userUpdates.length; i++) {
      if (userUpdates[i].id === playlistId) {
        setIsUpdating(true);
        break;
      }
    }
  }, [userUpdates])

  return (
    <div className="flex flex-col justify-between bg-zinc-700 p-6 rounded-md mr-10 mb-10">
      <div className="w-full">
        <img 
          src={playlistCoverUri !== '' ? playlistCoverUri : DefaultPlaylistCover} 
          className="w-60 h-60 rounded-lg mx-auto drop-shadow-md"
        />
        <div className="w-60 mx-auto">
          <h1 className="text-white truncate mt-5 font-semibold">{playlistName}</h1>
          <div className="flex flex-row flex-wrap h-20 mt-5 overflow-y-auto">
            {playlistLabels.map((label) => (
              <div className="rounded-sm bg-red-500 mr-3 mb-3 py-2 px-3">
                <h1 className="text-white text-xs font-semibold">{label}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-60 mx-auto mt-5">
          <FaEdit 
            color="white" 
            className="text-2xl cursor-pointer" 
            onClick={() => goToEditLabels(playlistId)} 
          />
          <div 
            className={`
              flex flex-row items-center rounded-full bg-red-500 w-10 h-10
              ${!isUpdating && 'hover:bg-red-400'}
              cursor-pointer`}
            onClick={() => addToUpdates(playlistId)}
          >
            {isUpdating ? (
              <div className="mx-auto">
                <ThreeCircles
                  height="15"
                  width="15"
                  color="#FFFFFF"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="three-circles-rotating"
                  outerCircleColor=""
                  innerCircleColor=""
                  middleCircleColor=""
                />
              </div>
            ) : (
              <MdUpdate 
                color="white" 
                className="mx-auto text-xl"
              />
            )}
            
          </div>
      </div>
    </div>
  );
};

export default PlaylistInfoAll;

{/* <ThreeCircles
height="20"
width="20"
color="#FF6F6F"
wrapperStyle={{}}
wrapperClass=""
visible={true}
ariaLabel="three-circles-rotating"
outerCircleColor=""
innerCircleColor=""
middleCircleColor=""
/> */}