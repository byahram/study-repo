import { Link, useNavigate } from "react-router-dom";

const Header02 = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };

  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
};

export default Header02;
