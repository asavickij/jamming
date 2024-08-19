import React, { useState } from 'react';
import Tracklist from './Tracklist';

export default function PlaylistCreator({ tracklist, removeTrackFromTracklist, createPlaylist }) {
    const [playlistName, setPlaylistName] = useState('');

    const handlePlaylistNameChange = (e) => setPlaylistName(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        createPlaylist(playlistName);
    };

  return (
    <div className='PlaylistCreator'>
      <form action="submit">
        <label htmlFor="playlist_name">Playlist name:</label><br/>
        <input 
            type="text" 
            name="playlist_name" 
            id="playlist_name" 
            value={playlistName}
            onChange={handlePlaylistNameChange}    
        />
        <Tracklist 
            tracklist={tracklist} 
            removeTrackFromTracklist={removeTrackFromTracklist}
        />
        <button type='submit' onClick={handleSubmit}>Create a playlist</button>
      </form>
    </div>
  );
};
