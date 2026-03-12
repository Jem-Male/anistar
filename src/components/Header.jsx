import { Link } from "react-router-dom";
import categoryIcon from "../assets/style/image/menu-btn.svg";
import HomeIcon from "../../src/assets/style/image/pngfind.com-house-icon-png-531686.png";

function Header(){
    return(
    <header class="header">
        <div class="container">
            <Link to="/" class="btn-category">
                <img src={HomeIcon} class="homeicon" alt="homeicon"/>
            </Link>
            <Link to="/Category" class="btn-category">
                <img src={categoryIcon} alt="Menu button"/>
            </Link>
        </div>
    </header>
    );
}
export default Header;