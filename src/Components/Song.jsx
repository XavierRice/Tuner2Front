import { useState } from "react";
import SongForm from "./SongForm";

function Song({ song, handleDelete, handleSubmit }) {
    const [viewForm, setViewFrom] = useState(false)

    const toggleView = () => {
        setViewFrom(!viewForm)
    }

    return (
        <div className="Song">
        {viewForm ? (
          <SongForm
            songDetails={song}
            toggleView={toggleView}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div>
            <h4>
              {song.album} <span>{song.artist}</span>
            </h4>
            <h5>{song.song_name}</h5>
            <p>{song.is_favorite ? "⭐️" : "👌🏾"}</p>
          </div>
        )}
        <div className="actions">
          <button onClick={toggleView}>
            {viewForm ? "Cancel" : "Edit this song"}
          </button>
          <button onClick={() => handleDelete(song.id)}>delete</button>
        </div>
      </div>
    );
  }
  
  export default Song;