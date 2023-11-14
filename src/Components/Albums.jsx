import { useState, useEffect } from "react";
import Album from "./Album.jsx";

const API = import.meta.env.VITE_BASE_URL;

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`${API}/albums`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setAlbums(responseJSON);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Albums">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>See this Album</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return <Album key={album.id} album={album} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Albums;
