import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Songs from "./Songs.jsx";

const API = import.meta.env.VITE_BASE_URL;

function AlbumDetails() {
  const [album, setAlbum] = useState([]);
  let { album_id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/albums/${album_id}`)
      .then((response) => response.json())
      .then((responseJSON) => setAlbum(responseJSON))
      .catch((error) => console.error(error));
  }, [album_id]);

  useEffect(() => {
   
  }, [album.album_name]);
  const handleDelete = () => {
    deleteBookmark();
  };
  const deleteBookmark = () => {
    fetch(`${API}/albums/${album_id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/albums`))
      .catch((error) => console.error(error));
  };
  return (
    <article>
      <h3>
        {album.is_favorite ? <span>⭐️</span> : null} {album.album_name}
      </h3>
      <h5>
        <span>
          <h2>{album.album_artist}</h2>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      </h5>
      <h6>{album.debut_date}</h6>
      <p>{album.label}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/albums`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/albums/${album_id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <Songs/>
    </article>
  );
}

export default AlbumDetails;
