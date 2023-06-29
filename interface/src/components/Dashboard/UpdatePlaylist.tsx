import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { FaCheck } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

import { setUpdates } from '../../redux/actions/spotifyActions';
import { RootState, Update } from '../../redux/types';
import DefaultPlaylistCover from '../../assets/DefaultPlaylistCover.png';

interface UpdatePlaylistProps {
  updateId: string,
  playlistCoverUri: string,
  playlistName: string,
  updateComplete: boolean,
}

const UpdatePlaylist: React.FC<UpdatePlaylistProps> = ({
  updateId,
  playlistCoverUri,
  playlistName,
  updateComplete,
}) => {
  const dispatch = useDispatch();
  const userUpdates = useSelector((state: RootState) => state.spotify.updates);

  // TODO: Move update complete to local state and make backend call, update state when call is done
  const removeFromUpdates = (updateId: string) => {
    const newUpdates = userUpdates.filter((update: Update) => update.id !== updateId);
    dispatch(setUpdates(newUpdates));
  };

  return (
    <div className="flex flex-row justify-between py-5 items-center">
      <div className="flex flex-row items-center">
        <img 
          src={playlistCoverUri !== '' ? playlistCoverUri : DefaultPlaylistCover} 
          className="w-12 h-12 rounded-lg mx-auto drop-shadow-md"
        />
        <h1 className="text-white text-sm truncate ml-5 mr-3 font-semibold">{playlistName}</h1>
      </div>
      <div className="flex flex-row items-center ml-5">
        {updateComplete ? (
          <div 
            className="flex flex-row items-center rounded-full bg-red-500 w-6 h-6"
          >
            <FaCheck 
              color="white" className="mx-auto text-xs"
            />
          </div>
        ) : (
          <ThreeCircles
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
          />
        )}
        <MdCancel 
          color="white" 
          className="text-lg hover:text-gray-200 cursor-pointer ml-3"
          onClick={() => removeFromUpdates(updateId)}
        />
      </div>
    </div>
  );
};

export default UpdatePlaylist;