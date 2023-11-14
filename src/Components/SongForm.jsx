import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SongForm({ songDetails, handleSubmit, toggleView}) {
  let { id } = useParams();

  const [song, setSong] = useState({
    song_name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite:false
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (songDetails) {
      setSong(songDetails);
    }
  }, [id, songDetails]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(song);
    if (songDetails) {
      toggleView();
    }
    setSong({
        song_name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite:false
    });
    
  };

  return (
    <div className="Edit">
     
      <form onSubmit={onSubmit}>
        <label htmlFor="song_name">Name of Song:</label>
        <input
          id="song_name"
          value={song.song_name}
          type="text"
          onChange={handleTextChange}
          placeholder="The name of the tune"
          required
        />
        <label htmlFor="title">Artist:</label>
        <input
          id="Artist"
          type="text"
          value={song.artist}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          value={song.time}
          onChange={handleTextChange}
          required
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default SongForm;
