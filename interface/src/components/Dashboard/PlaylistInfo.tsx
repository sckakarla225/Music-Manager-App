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
      <h1 className="text-white">{playlistCoverUri}</h1>
      <h1 className="text-white">{playlistName}</h1>
      {playlistLabels.map((label) => (
        <h1 className="text-white">{label}</h1>
      ))}
    </div>
  );
};

export default PlaylistInfo;