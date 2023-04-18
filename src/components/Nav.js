import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <div className="navEl">Home</div>
        </Link>
        <Link to="/gallery">
          <div className="navEl">Gallery</div>
        </Link>

        <Link to="/about">
          <div className="navEl">About</div>
        </Link>
      </div>
    </>
  );
}
