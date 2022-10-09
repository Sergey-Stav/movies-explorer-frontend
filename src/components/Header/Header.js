import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <section className="header">
      <Logo />
      <Navigation loggedIn={props.loggedIn} />
    </section>
  );
}

export default Header;
