import React from 'react';

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
    <div>
      
    </div>
  );
};

export default PlaylistInfo;