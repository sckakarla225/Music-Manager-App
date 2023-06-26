import React from 'react';

interface UpdatePlaylistProps {
  playlistCoverUri: string,
  playlistName: string,
  updateComplete: boolean,
  removeUpdateFunc: Function,
}

const UpdatePlaylist: React.FC<UpdatePlaylistProps> = ({
  playlistCoverUri,
  playlistName,
  updateComplete,
  removeUpdateFunc,
}) => {
  return (
    <div>
      
    </div>
  );
};

export default UpdatePlaylist;