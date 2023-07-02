import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { MdArrowBack, MdAdd } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';

import { SideBar, Navbar } from '../../components';
import { RootState, Label, Playlist } from '../../redux/types';
import { setPlaylists } from '../../redux/actions/spotifyActions';
import DefaultPlaylistCover from '../../assets/DefaultPlaylistCover.png';

const EditLabelsPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { playlistId } = useParams();

  const userPlaylists = useSelector((state: RootState) => state.spotify.playlists);
  const [playlist, setPlaylist] = useState<Playlist>();
  const [additionalLabels, setAdditionalLabels] = useState<string[]>([]);

  // TODO: Store these on backend and load on useEffect
  const defaultLabels: Label[] = [
    { id: '0', labelName: 'Gym & Workout', labelCreatorId: 'default' },
    { id: '1', labelName: 'Dance Party', labelCreatorId: 'default' },
    { id: '2', labelName: 'Gaming', labelCreatorId: 'default' },
    { id: '3', labelName: 'Study Session', labelCreatorId: 'default' },
    { id: '4', labelName: 'Romantic', labelCreatorId: 'default' },
  ];

  const addLabel = (label: Label) => {
    if (!(additionalLabels.length === 3)) {
      setAdditionalLabels([...additionalLabels, label.labelName]);
    }
  };

  const removeLabel = (labelName: string) => {
    const newLabels = additionalLabels.filter((label: string) => label !== labelName);
    setAdditionalLabels(newLabels);
  };

  const saveLabels = () => {
    // TODO: Save to backend here instead so that dashboard can re-load playlists
    // TODO: Honestly don't need to update global state here
    const updatedPlaylists = userPlaylists.map((userPlaylist: Playlist) => 
      userPlaylist.id === playlistId 
        ? { ...userPlaylist, playlistLabels: additionalLabels } 
        : { ...userPlaylist }
    );
    dispatch(setPlaylists(updatedPlaylists));
    console.log(updatedPlaylists);
    navigate('/dashboard');
  };

  useEffect(() => {
    for (let i = 0; i < userPlaylists.length; i++) {
      if (userPlaylists[i].id === playlistId) {
        setPlaylist(userPlaylists[i]);
        setAdditionalLabels(userPlaylists[i].playlistLabels.slice(2));
        break;
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen pb-40 bg-zinc-900">
      <SideBar />
      <div className="ml-28 p-6 px-12">
        <Navbar />
      </div>
      <div className="flex flex-row ml-32 p-6 px-12 pt-2">
        <div className="flex flex-row">
          <MdArrowBack 
            color="white" 
            className="text-3xl cursor-pointer" 
            onClick={() => navigate('/dashboard')} 
          />
        </div>
        <div className="flex flex-row w-full px-28">
          <div className="w-1/2 h-full">
            <img 
              src={playlist?.playlistCoverUri !== '' ? playlist?.playlistCoverUri : DefaultPlaylistCover} 
              className="w-80 h-80 rounded-lg mx-auto drop-shadow-md"
            />
            <div className="w-80 mx-auto">
              <h1 className="text-white font-bold mt-5 text-lg">{playlist?.playlistName}</h1>
              <div className="flex flex-row items-center mt-4">
                <h1 className="text-white font-regular text-md">Genre Label: </h1>
                <div className="rounded-sm bg-red-500 py-2 px-3 ml-3">
                  <h1 className="text-white text-xs font-semibold">{playlist?.playlistLabels[0]}</h1>
                </div>
              </div>
              <div className="flex flex-row items-center mt-4">
                <h1 className="text-white font-regular text-md">Mood Label: </h1>
                <div className="rounded-sm bg-red-500 py-2 px-3 ml-3">
                  <h1 className="text-white text-xs font-semibold">{playlist?.playlistLabels[1]}</h1>
                </div>
              </div>
              <div className="flex flex-col mt-5">
               <h1 className="text-white font-regular text-md">Additional Labels: (Max - 3) </h1>
               <div className="flex flex-row flex-wrap h-20 mt-3 overflow-y-auto bg-zinc-700 p-3 rounded-md">
                {additionalLabels.map((label) => (
                  <div className="flex flex-row justify-between items-center rounded-sm bg-red-500 mr-3 mb-3 py-2 px-3 h-8">
                    <h1 className="text-white text-xs font-semibold">{label}</h1>
                    <FaTimes 
                      color="white"
                      className="text-lg cursor-pointer ml-3"
                      onClick={() => removeLabel(label)}
                    />
                  </div>
                ))}
              </div>
              </div>
              <button 
                className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline mx-auto mt-5"
                onClick={() => saveLabels()}
              >
                <div className="flex flex-row justify-center items-center">
                  <p className="text-sm">Save</p>
                </div>
              </button>
            </div>
          </div>
          <div className="w-1/2 bg-zinc-700 h-full rounded-md px-12 py-16">
            <h1 className="text-white font-bold text-xl">
              Default Labels
            </h1>
            <div className="flex flex-row flex-wrap h-20 mt-6 overflow-y-auto">
              {defaultLabels.map((label) => (
                <div className="flex flex-row justify-between items-center rounded-sm bg-red-500 mr-3 mb-3 py-2 px-3">
                  <h1 className="text-white text-xs font-semibold">{label.labelName}</h1>
                  <MdAdd 
                    color="white"
                    className="text-xl cursor-pointer"
                    onClick={() => addLabel(label)}
                  />
                </div>
              ))}
            </div>
            <h1 className="text-white font-bold text-xl mt-10">
              Your Labels
            </h1>
            <div className="flex flex-row flex-wrap h-20 mt-6 overflow-y-auto">
              {defaultLabels.map((label) => (
                <div className="flex flex-row justify-between items-center rounded-sm bg-red-500 mr-3 mb-3 py-2 px-3">
                  <h1 className="text-white text-xs font-semibold">{label.labelName}</h1>
                  <MdAdd 
                    color="white"
                    className="text-xl cursor-pointer"
                    onClick={() => addLabel(label)}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center mt-10">
              <MdAdd 
                color="white"
                className="text-4xl cursor-pointer"
                onClick={() => navigate('/create-labels')}
              />
              <div className="flex flex-col mt-5 ml-5">
                <h1 className="text-white text-md font-semibold">Create Labels</h1>
                <p className="text-white text-sm font-light mr-20 mt-2">
                  Further customize your library by generating your own labels!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLabelsPage;