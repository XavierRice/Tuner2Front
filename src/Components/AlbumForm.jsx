import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function AlbumForm() {
  const navigate = useNavigate();
  const [album, setAlbum] = useState({
    album_name: "",
    album_artist: "",
    debut_date: "",
    label: "",
    is_favorite: false,
  });

  const addAlbum = () => {
    fetch(`${API}/albums`, {
      method: "POST",
      body: JSON.stringify(album),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/albums`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setAlbum({ ...album, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setAlbum({ ...album, is_favorite: !album.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAlbum();
  };


  return (

      <div className="Edit">
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Album Name:</label>
    <input
      id="album_name"
      value={album.album_name}
      type="text"
      onChange={handleTextChange}
      placeholder="Name of Album"
      required
      />
    <label htmlFor="Artist">Artist:</label>
    <input
      id="album_artist"
      type="text"
      placeholder=" name of artist "
      onChange={handleTextChange}
      value={album.album_artist}
      required
      />
    <label htmlFor="is_favorite">Favorite:</label>
    <input
      id="is_favorite"
      type="checkbox"
      onChange={handleCheckboxChange}
      checked={album.is_favorite}
      />
    <label htmlFor="debut_date">Debut:</label>
    <input
      id="debut_date"
      name="debut_date"
      value={album.debut_date}
      onChange={handleTextChange}
      placeholder="When did it hit!"
      />
    <label htmlFor="label">Label:</label>
    <input
      id="label"
      name="label"
      value={album.label}
      onChange={handleTextChange}
      placeholder="Producer"
      />
    <br />
    <input type="submit" />
  </form>
  <Link to={`/albums/${album_id}`}>
    <button>Nevermind!</button>
  </Link>
</div>
);


}

export default AlbumForm;