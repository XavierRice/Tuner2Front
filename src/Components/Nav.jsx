import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/albums">Albums</Link>
      </h1>
      <button>
        <Link to="/albums/new">New Album</Link>
      </button>
    </nav>
  );
}
