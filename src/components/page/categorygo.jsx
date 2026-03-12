import { Link } from "react-router-dom";

function CategoryGo(props) {
    return(
        <div class="linie_dw">
        <Link to="/info" class="cotainer-dw">
        <img src={props.img_cat} class="mini_img" alt=""/>
        <div class="text">
            <span class="dw-name">{props.dw_name}</span>
            <span class="dw-data">{props.dw_date}</span>
        </div>     
        </Link>
        </div>
    );
}

export default CategoryGo;