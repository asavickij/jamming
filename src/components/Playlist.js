import React, { useState } from 'react';
import Tracklist from './Tracklist';
import styles from '../Styles.module.css';
import { Tooltip } from 'react-tooltip';

export default function Playlist({ playlist, playlistIndex, removeTrackFromPlaylist, updatePlaylistName, deletePlaylist }) {
    const [playlistName, setPlaylistName] = useState(playlist.name);

    const handlePlaylistNameChange = (e) => {
        setPlaylistName(e.target.innerText);
    };

    const handleNameBlur = () => {
        updatePlaylistName(playlistIndex, playlistName);
    }
    return (
        <div className={styles.playlist}>
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
                {playlistName}
            </h2>
            <Tracklist 
                tracklist={playlist.tracks} 
                removeTrackFromTracklist={(track) => removeTrackFromPlaylist(playlistIndex, track)}
            />
            <Tooltip id="my-tooltip" />
            <button 
                className={styles.playlist_delete_btn}
                onClick={() => deletePlaylist(playlistIndex)}
            >
                Delete Playlist
            </button>
        </div>
    );
};