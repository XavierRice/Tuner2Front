import { Link } from "react-router-dom";

function Album({ album }) {
  return (
    <tr>
      <td>
        {album.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td >
          {album.album_name}
          <br/>
          {album.album_artist}
      </td>
      <td>
        <Link to={`/album/${album.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Album;
