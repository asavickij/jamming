import React, { useState } from 'react';
import Tracklist from './Tracklist';
import styles from '../Styles.module.css';
import { Tooltip } from 'react-tooltip';

export default function Playlist({ playlist, playlistIndex, removeTrackFromPlaylist, updatePlaylistName, deletePlaylist, exportPlaylist }) {
  const [playlistName, setPlaylistName] = useState(playlist.name);

  const handlePlaylistNameChange = (e) => {
    setPlaylistName(e.target.innerText);
  };

  const handleNameBlur = () => {
    updatePlaylistName(playlistIndex, playlistName);
  };

  return (
    <div className={styles.tracks_wrapper}>

        <div className={styles.playlist_card}>
            <h2
                className={styles.playlistName}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Click to edit"
                data-tooltip-place="top"
                contentEditable='true'
                onInput={handlePlaylistNameChange}
                onBlur={handleNameBlur}
                suppressContentEditableWarning={true}
            >
                {playlist.name}
            </h2>
            <Tracklist
                tracklist={playlist.tracks}
                buttonType="remove"  // Specify remove button for the playlist
                onButtonClick={(track) => removeTrackFromPlaylist(playlistIndex, track)}
            />
            <Tooltip id="my-tooltip" />
            <div className={styles.playlist_btn_container}>
                <button
                    className={styles.playlist_exp_btn}
                    onClick={() => exportPlaylist(playlistIndex)}
                >
                    Add Playlist to Spotify
                </button>
                <button
                    className={styles.playlist_del_btn}
                    onClick={() => deletePlaylist(playlistIndex)}
                >
                    Delete Playlist
                </button>
            </div>
        </div>
    </div>
  );
}
