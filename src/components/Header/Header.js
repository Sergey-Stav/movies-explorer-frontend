import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <section className="header">
      <Link to="/">
        <Logo />
      </Link>
      <Navigation isLoggedIn={props.isLoggedIn} />
    </section>
  );
}

export default Header;
