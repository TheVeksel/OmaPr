import Hamburger from "./HamburgerContent/Hamburger";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openLogin } from "../../store/features/loginSlice";

export default function ThirdHeaderPart(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="other">
      <div className="login" onClick={() => dispatch(openLogin())}>
          <p>Kirjaudu</p>
          <img src="/photo/login.png" alt="img" />
      </div>
      <Link to={"/search"}>
        <div className="search">
          <p>Hae</p>
          <img className="search__img" src="/photo/lataus.png" alt="img" />
        </div>
      </Link>
      <Hamburger />
    </div>
  );
}
