import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Song from "./Song.jsx";
import SongForm from "./SongForm.jsx";

const API = import.meta.env.VITE_BASE_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  let { id, album_id } = useParams();

const handleAdd = (newSong) => {
  fetch(`${API}/albums/${id}/songs`, {
    method: "POST",
    body: JSON.stringify(newSong),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      setSongs([responseJSON, ...songs]);
    })
    .catch((error) => console.error("catch", error));
};

const handleDelete = (id) => {
  fetch(`${API}/albums/${album_id}/songs/${id}`, {
    method: "DELETE",
  })
    .then(
      (response) => {
        const copySongArray = [...songs];
        const indexSong = copySongArray.findIndex((song) => {
          return song.id === id;
        });
        copySongArray.splice(indexSong, 1);
        setSongs(copySongArray);
      },
      (error) => console.error(error)
    )
    .catch((error) => console.warn("catch", error));
};

const handleEdit = (updatedSong) => {
  fetch(`${API}/albums/${album_id}/songs/${updatedSong.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedSong),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      const copySongArray = [...songs];
      const songIndex = copySongArray.findIndex((song) => {
        return song.id === updatedSong.id;
      });
      copySongArray[songIndex] = responseJSON;
      setSongs(copySongArray);
    })
    .catch((error) => console.error(error));
};


  useEffect(() => {
    fetch(`${API}/albums/${album_id}/songs`)
      .then((response) => response.json())
      .then((response) => {
        setSongs(response.allSongs);
      });
  }, [id]);


  return (
    <section className="songs">
    <h2>Songs</h2>
    <SongForm handleSubmit={handleAdd}>
      <h3>Add a New Song</h3>
    </SongForm>
    {songs.map((song) => (
      <Song 
      key={song.id}
       song={song} 
       handleDelete={handleDelete} 
       handleSubmit={handleEdit}/>
    ))}
  </section>
  );
}

export default Songs;
