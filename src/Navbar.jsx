import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"><button data-tooltip="Home">🏠</button></Link>
      <Link to="/portfolio"><button  data-tooltip="Portfolio">📁</button></Link>
      <Link to="/resume"><button  data-tooltip="Resume">📑</button></Link>
    </div>
  );
}
