import './Header.css'
import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";

function Header(props) {
    return (
        <section className= "header">
            <img className="header__logo" alt="Лого" src={logo}/>
            <Navigation loggedIn={props.loggedIn}/>
        </section>
    )
}

export default Header;