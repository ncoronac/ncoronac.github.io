import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"><button>🏠</button></Link>
      <Link to="/portfolio"><button>📁</button></Link>
      <Link to="/resume"><button>📑</button></Link>
    </div>
  );
}
