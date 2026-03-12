import { Link } from "react-router-dom";

function BigContainer({rec}){
    return(

        <Link to={`/rec.info/${rec.id}`} class="category-item">
            <img src={rec.img} alt="football" class="category-item__imag"/>
            <div class="name_text">
                <span class="category-item__titel">{rec.name}</span>
             </div>
        </Link>
   
    );
}

export default BigContainer;