import logo from "../../assets/img/logo.png";
import FavoriteIcon from "../SVG/favoriteIcon";
import NotificationIcon from "../SVG/notificationIcon";
import userImg from "../../assets/img/user.png";
import "./style.scss";

const Header = ()=>{
    return (
        <header className="header">
          <div className="header__container">
          <a href="/">
            <img src={logo} alt="logo"/>
            </a>
            <div className="header__right-block">
                <FavoriteIcon/>
                <NotificationIcon/>
                <div className="header__avatar-block">
                    <img src={userImg} alt="avatar"/>
                    <p>Ivan1234</p>
                </div>
            </div>
          </div>
        </header>
    )
}

export default Header;