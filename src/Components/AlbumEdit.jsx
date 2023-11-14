import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function AlbumEditForm() {
  let { album_id } = useParams();
  const navigate = useNavigate();

  const [album, setAlbum] = useState({
    album_name: "",
    album_artist: "",
    debut_date: "",
    label: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setAlbum({ ...album, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setAlbum({ ...album, is_favorite: !album.is_favorite });
  };


  const updateAlbum = () => {
    console.log(`${API}/albums/${album.id}`);

    fetch(`${API}/albums/${album.id}`, {
      method: "PUT",
      body: JSON.stringify(album),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/albums/${album_id}`);
      })
      .catch((error) => console.error("catch", error));
  };


  useEffect(() => {
    fetch(`${API}/albums/${album_id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setAlbum(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [album_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAlbum();
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

export default AlbumEditForm;
